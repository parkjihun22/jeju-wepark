// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// 요청 본문 파싱 설정
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 폼 데이터를 받아 이메일로 전송하는 엔드포인트
app.post('/submit', async (req, res) => {
  const { name, email, phone } = req.body;

  // 네이버 SMTP 서버 설정 (host, port, secure)
  let transporter = nodemailer.createTransport({
    host: 'smtp.naver.com', // 네이버 SMTP 서버
    port: 465,              // 465번 포트(SSL)
    secure: true,           // SSL 사용
    auth: {
      user: 'eyeful31@naver.com',      // 본인 네이버 이메일 주소
      pass: 'gusqls@159'               // 네이버 이메일 비밀번호 또는 앱 전용 비밀번호
    }
  });

  // 전송할 이메일 옵션 설정
  const mailOptions = {
    from: 'eyeful31@naver.com',            // 보내는 메일 주소
    to: 'eyeful31@naver.com',              // 받는 메일 주소 (관리자용)
    subject: '브레인시티수자인관심고객',
    text: `새로운 관심고객 등록 정보입니다:\n\n이름: ${name}\n이메일: ${email}\n전화번호: ${phone}`
  };

  try {
    // 이메일 전송
    let info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    res.json({ success: true, message: '등록 완료 및 이메일 전송 성공' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: '이메일 전송 중 오류 발생' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`서버가 포트 ${PORT}에서 실행중...`));
