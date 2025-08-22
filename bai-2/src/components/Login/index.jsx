function Login() {
  const isLogin = true;

  return (
    <>
      {isLogin ? (
        <>
          <div>Thông tin người dùng, nút đăng xuất </div>
        </>
      ) : (
        <>
          <div>Nút đăng nhập, đăng ký </div>
        </>
      )}

      {isLogin && (
        <>
          <div>Avatar</div>
        </>
      )}
    </>
  );
}

export default Login;
