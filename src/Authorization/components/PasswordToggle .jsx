import { useState } from 'react';

const PasswordToggle = () => {
  // Состояние, отвечающее за видимость пароля
  const [showPassword, setShowPassword] = useState(false);

  // Обработчик события для переключения видимости пароля
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {/* Поле ввода пароля с динамическим типом в зависимости от состояния */}
      <label htmlFor="password">Пароль:</label>
      <input
        type={showPassword ? 'text' : 'password'}
        id="password"
        name="password"
      />

      {/* Кнопка "показать/скрыть пароль" */}
      <button onClick={togglePasswordVisibility}>
        {showPassword ? 'Скрыть пароль' : 'Показать пароль'}
      </button>
    </div>
  );
};

export default PasswordToggle;