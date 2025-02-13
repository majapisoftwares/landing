import Input from "@italodeandra/ui/components/Input";
import Button from "@italodeandra/ui/components/Button";
import { useForm } from "react-hook-form";
import { blobUrlToBase64 } from "@italodeandra/next/fileStorage/converters";
import { Controller } from "@italodeandra/ui/form2";
import PictureCropInput from "@italodeandra/ui/components/PictureCropInput";
import { useAuthUserUpdateApi } from "../../api/user/update/mutation";
import { useAuthGetUser } from "../../api/getUser";
export default function EditProfile() {
    const { data: user, isLoading } = useAuthGetUser();
    const userUpdate = useAuthUserUpdateApi();
    const form = useForm({
        defaultValues: {
            name: user?.name || "",
            profilePicture: user?.profilePicture || "",
        },
    });
    const onSubmit = async () => {
        userUpdate.mutate(form.getValues());
    };
    return (<div className="px-3">
      <form className="mx-auto flex max-w-screen-lg flex-col gap-3 pb-3" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="text-2xl font-medium">Edit profile</div>
        <div className="flex flex-col gap-2 rounded-lg bg-zinc-900 p-2">
          <div className="font-semibol">Name</div>
          <Input {...form.register("name", {
        required: "Fill with your name",
    })} required error={!!form.formState.errors.name} helpText={form.formState.errors.name?.message}/>
        </div>
        <div className="flex flex-col gap-2 rounded-lg bg-zinc-900 p-2">
          <div className="font-semibol">Profile picture</div>
          <Controller control={form.control} name="profilePicture" render={({ field }) => (<PictureCropInput value={field.value} onChange={async (value) => field.onChange(await blobUrlToBase64(value))} loading={isLoading}/>)}/>
        </div>
        <Button variant="filled" color="primary" size="lg" type="submit" loading={userUpdate.isPending}>
          Save
        </Button>
      </form>
    </div>);
}
