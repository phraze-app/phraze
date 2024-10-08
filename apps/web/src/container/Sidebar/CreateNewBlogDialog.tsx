import { useState } from "react";
import { Flex, Input, PhzButton, TextArea } from "@phraze-app/ui";
import PhzDialog from "@phraze-app/ui/PhzDialog";

interface CreateNewBlogDialogProps {
  TriggerComponent: (props: any) => JSX.Element;
}

export const CreateNewBlogDialog = ({
  TriggerComponent,
}: CreateNewBlogDialogProps) => {
  const [openCreateBlog, setOpenCreateBlog] = useState(false);

  const onClickCreateNewBlog = () => {
    setOpenCreateBlog((value) => !value);
  };

  return (
    <PhzDialog
      open={openCreateBlog}
      onOpenChange={onClickCreateNewBlog}
      title="Create New Blog"
      description="Enter details to create new blog"
      triggerComponent={
        <TriggerComponent onClickHandler={onClickCreateNewBlog} />
      }
      footerComponent={
        <Flex gap="0.5rem" justifyContent="flex-end" p={2}>
          <PhzButton variant="secondary">Cancel</PhzButton>
          <PhzButton variant="primary">Confirm</PhzButton>
        </Flex>
      }
    >
      <Flex p={2} flexDirection="column" gap="1rem">
        <Input
          placeholder="Dunder Mifflin Paper Company"
          label="Blog Name"
          // helperText="This is the name of your product or brand. You can edit it anytime."
        />

        <Input
          placeholder="dummy-blog-slug"
          label="Blog Slug (Optional)"
          // helperText="This is the domain name of your blog. You can edit it anytime or connect your custom domain."
        />

        <TextArea
          label="Blog Description"
          placeholder="Dunder Mifflin Paper Company is Scranton based wholesale office supplies company. We are the best!"
          helperText="Write about your blog, you can edit it later"
        />
      </Flex>
    </PhzDialog>
  );
};

export default CreateNewBlogDialog;
