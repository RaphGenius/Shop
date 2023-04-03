type FormProps = {
  isLogin: "login" | "signup" | undefined;
};

const Form = ({ isLogin }: FormProps) => {
  return (
    <form onSubmit={() => {}} className="space-y-5">
      <div>
        <label className="font-medium">Email</label>
        <input
          type="email"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Mot de passe</label>
        <input
          type="password"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>

      <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
        {isLogin === "signup" ? "S'inscrire" : "Se connecter"}
      </button>
    </form>
  );
};

export default Form;
