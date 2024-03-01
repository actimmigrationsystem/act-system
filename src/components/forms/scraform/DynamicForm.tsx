
interface Field {
  id: string;
  label: string;
  type: string;
  options?: string[];
}

interface FormSection {
  legend: string;
  fields: Field[];
}

interface DynamicFormProps {
  fields: FormSection[];
}

const DynamicForm = ({ fields }: DynamicFormProps) => {
  return (
    <form className="max-w-screen-md mx-auto mt-8">
      {fields.map(({ legend, fields }) => (
        <fieldset className="mb-8" key={legend}>
          <legend className="text-lg font-semibold">{legend}</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fields.map(({ id, label, type, options }) => (
              <div className="mb-4" key={id}>
                <label htmlFor={id} className="block mb-1">
                  {label}
                </label>
                {type === "select" ? (
                  <select id={id} className="form-select w-full">
                    <option value="">{`Select ${label}`}</option>
                    {options?.map((option) => (
                      <option value={option.toLowerCase()} key={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : type === "textarea" ? (
                  <textarea id={id} className="form-textarea w-full"></textarea>
                ) : (
                  <input id={id} type={type} className="form-input w-full" />
                )}
              </div>
            ))}
          </div>
        </fieldset>
      ))}
      <button
        type="submit"
        className="btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-md"
      >
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
