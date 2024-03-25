interface FormActionProps {
    handleSubmit: any;
    type?: string;
    action?: string;
    text: string;
}

const FormAction = ({
  handleSubmit,
  type = "Button",
  action = "submit",
  text,
}: FormActionProps)=> {
return (
  <>
    {type === "Button" ? (
      <button
        type={action as "submit" | "reset" | "button" | undefined}
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
        onSubmit={handleSubmit}
        style={{ backgroundColor: "#0e5a97" }}>
        {text}
      </button>
    ) : (
      <></>
    )}
  </>
);
};
export default FormAction;
