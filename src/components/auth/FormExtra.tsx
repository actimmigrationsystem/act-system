const FormExtra = () => {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 focus:ring-blue-500 border-gray-300 rounded"
          style={{ color: "#0e5a97" }}
        />
        <label
          htmlFor="remember-me"
          className="ml-2 block text-sm text-gray-900">
          Remember me
        </label>
      </div>

      <div className="text-sm">
        <a
          href="/reset"
          className="font-medium hover:text-blue-500"
          style={{ color: "#0e5a97" }}
        >
          Forgot your password?
        </a>
      </div>
    </div>
  );
};
export default FormExtra;
