import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/store";
import { decrement, increment } from "~/store/Counter";

export const Counter: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(increment());
        }}
        style={{ marginRight: 10 }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
        style={{ marginRight: 10 }}
      >
        Decrement
      </button>
      <span>{counter}</span>
    </>
  );
};
