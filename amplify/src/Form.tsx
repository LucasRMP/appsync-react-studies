import * as React from "react";

interface State {
  name: string;
}

interface Props {
  onSubmit: (formValues: State) => void;
}

export const Form: React.FC<Props> = ({ onSubmit }) => {
  const [state, setState] = React.useState<State>({ name: "" });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setState({ [name]: value } as any);
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        onSubmit(state);
      }}
    >
      <h3>Create Blog</h3>
      <input
        name="name"
        placeholder="name"
        value={state.name}
        onChange={handleChange}
      />
      <button type="submit">save</button>
    </form>
  );
};
