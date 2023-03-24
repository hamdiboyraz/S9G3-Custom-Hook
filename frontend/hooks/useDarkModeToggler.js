import useLocalStorageState from "./useLocalStorageState";

const useDarkModeToggler = (initialValue) => {
  const [mode, setMode] = useLocalStorageState("dark_mode", initialValue);

  const handleChange = () => {
    setMode(!mode);
    console.log(mode);
  };

  return [mode, handleChange];
};

export default useDarkModeToggler;
