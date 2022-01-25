import styles from  './index.module.css';

export default function Login() {
  return (
      <div>
        <form name="JoinForm" id="JoinForm" method="POST">
            <fieldset>
                <legend>로그인</legend>
                <div className={styles.form_box}>
                    <label htmlFor="UserID">아이디</label>
                    <input type="text" name="UserID" id="UserID" value="" placeholder="아이디를 입력해주세요" required />
                </div>
                <div className={styles.form_box}>
                    <label htmlFor="UserPassword">비밀번호</label>
                    <input type="password" name="UserPassword" id="UserPassword" value="" placeholder="비밀번호를 입력해주세요" required />
                </div>
            </fieldset>
            <button className={styles.button} type="submit">로그인</button>
        </form>
      </div>
  );
};