import React from "react";
import ConfirmModal from "../components/ConfirmModal";

export default {
  title: "ConfirmModal component",
  component: ConfirmModal,
};

const Template = (args) => <ConfirmModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  title: "My recommended movies",
  url: 'http://localhost:3000/recomment?title="my movies"&ids=232,434',
  onClose: () => {},
};
