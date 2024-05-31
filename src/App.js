import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAgreement } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const isAgreed = useSelector((state) => state.agreement.isAgreed);

  return (
    <div className="App">
      <form>
        <label>
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={() => dispatch(toggleAgreement())}
          />
          Я принимаю условия пользовательского соглашения
        </label>
        <br />
        <button type="submit" disabled={!isAgreed}>
          Подтвердить соглашение
        </button>
      </form>
    </div>
  );
}

export default App;
