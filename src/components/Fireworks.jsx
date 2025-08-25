import React, { useEffect } from "react";
import "./fireworks.css";

export default function Fireworks() {
  useEffect(() => {
    // 🎉 Confetti rơi
    const confettiInterval = setInterval(() => {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.background = `hsl(${Math.random() * 360}, 70%, 50%)`;
      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 5000);
    }, 150);

    // 🎇 Pháo hoa bùng nổ (tăng tần suất)
    const fireworksInterval = setInterval(() => {
      createFirework();
    }, 300);

    // 🌟 Ngôi sao lấp lánh
    const starInterval = setInterval(() => {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = Math.random() * 100 + "vw";
      star.style.top = Math.random() * 100 + "vh";
      document.body.appendChild(star);

      setTimeout(() => star.remove(), 3000);
    }, 800);

    // 💌 Thiệp rơi (nhiều câu chúc ngẫu nhiên)
    const messages = [
      "💌 Chúc mừng 20 năm ngày trở về!",
      "🎉 Kỷ niệm đẹp, tình bạn mãi xanh!",
      "🌟 Mãi nhớ tuổi học trò!",
      "💖 Tình thầy trò – Nghĩa bạn bè!",
      "✨ Chúc sức khỏe và thành công!",
      "🎊 Hạnh phúc – Bình an – Thịnh vượng!",
      "📚 Tri ân mái trường, thầy cô!",
      "💐 Tháng năm rực rỡ, tình bạn vẹn nguyên!"
    ];

    const cardInterval = setInterval(() => {
      const card = document.createElement("div");
      card.className = "greeting-card";

      // Lấy ngẫu nhiên 1 thông điệp
      const msg = messages[Math.floor(Math.random() * messages.length)];
      card.innerText = msg;

      // Vị trí rơi ngẫu nhiên
      card.style.left = Math.random() * 90 + "vw";

      // Màu nền ngẫu nhiên
      card.style.background = `hsl(${Math.random() * 360}, 90%, 90%)`;

      document.body.appendChild(card);

      setTimeout(() => card.remove(), 6000);
    }, 3000);

    return () => {
      clearInterval(confettiInterval);
      clearInterval(fireworksInterval);
      clearInterval(starInterval);
      clearInterval(cardInterval);
    };
  }, []);

  const createFirework = () => {
    const firework = document.createElement("div");
    firework.className = "firework";
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 50 + "vh";
    document.body.appendChild(firework);

    for (let i = 0; i < 25; i++) {
      const particle = document.createElement("span");
      particle.className = "particle";
      particle.style.transform = `rotate(${i * (360 / 25)}deg) translateY(-70px)`;
      particle.style.background = `hsl(${Math.random() * 360}, 80%, 60%)`;
      firework.appendChild(particle);
    }
    

    setTimeout(() => firework.remove(), 2000);
  };

  return (
    <div className="fireworks">
    
    </div>
  );
}
