import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GameContext } from '../context/GameContext';
import MiniGame from '../components/MiniGame';

const roomData = {
  '1': {
    title: 'Phòng 1: Hành trình tìm đường cứu nước',
    content: 'Đầu thế kỷ XX, đứng trước cuộc khủng hoảng về đường lối cứu nước của các sĩ phu yêu nước tiền bối, Nguyễn Tất Thành đã quyết định ra đi tìm đường cứu nước. Không đi sang phương Đông như các bậc tiền bối, Người hướng sang phương Tây, nơi có tư tưởng "Tự do, Bình đẳng, Bác ái".',
    gameType: 'multiple_choice',
    gameData: {
      question: 'Yếu tố cốt lõi nào đã thúc đẩy Nguyễn Tất Thành quyết định không đi theo con đường cứu nước của Phan Bội Châu và Phan Châu Trinh?',
      choices: [
        'Do không được sự hỗ trợ tài chính từ hai nhà yêu nước.',
        'Nhận thức được những hạn chế lịch sử trong chủ trương cầu viện Nhật Bản và cải lương của các tiền bối.',
        'Sự can thiệp trực tiếp của thực dân Pháp vào các phong trào này.',
        'Muốn tìm hiểu văn hóa phương Tây trước khi quyết định.'
      ],
      answer: 'Nhận thức được những hạn chế lịch sử trong chủ trương cầu viện Nhật Bản và cải lương của các tiền bối.'
    }
  },
  '2': {
    title: 'Phòng 2: Bản chất Độc lập Dân tộc',
    content: 'Tư tưởng Hồ Chí Minh về độc lập dân tộc không chỉ dừng lại ở quyền tự quyết hay xóa bỏ ách thống trị ngoại bang. Đó phải là nền độc lập thật sự, hoàn toàn, và đặc biệt: Độc lập dân tộc phải gắn liền với tự do, hạnh phúc của nhân dân.',
    gameType: 'fill_in_the_blank',
    gameData: {
      question: 'Trong bản Yêu sách của nhân dân An Nam (1919), Nguyễn Ái Quốc đã đòi hỏi quyền lợi cơ bản gì mà nền tảng của nó sau này phát triển thành tư tưởng cốt lõi? (Gợi ý: quyền _____ của các dân tộc)',
      answer: 'tự quyết'
    }
  },
  '3': {
    title: 'Phòng 3: Chủ nghĩa Xã hội ở Việt Nam',
    content: 'Hồ Chí Minh tiếp thu lý luận Mác - Lênin nhưng vận dụng vô cùng sáng tạo vào hoàn cảnh Việt Nam - một nước thuộc địa nửa phong kiến, nông nghiệp lạc hậu tiến thẳng lên CNXH không qua giai đoạn phát triển tư bản chủ nghĩa.',
    gameType: 'multiple_choice',
    gameData: {
      question: 'Theo tư tưởng Hồ Chí Minh, đặc trưng kinh tế nổi bật nhất của chủ nghĩa xã hội là gì?',
      choices: [
        'Xóa bỏ hoàn toàn sở hữu tư nhân ngay lập tức.',
        'Phát triển mạnh mẽ lực lượng sản xuất gắn liền với chế độ công hữu về tư liệu sản xuất chủ yếu.',
        'Mở cửa nền kinh tế hoàn toàn cho tư bản nước ngoài.',
        'Phân phối cào bằng, ai cũng hưởng như nhau.'
      ],
      answer: 'Phát triển mạnh mẽ lực lượng sản xuất gắn liền với chế độ công hữu về tư liệu sản xuất chủ yếu.'
    }
  },
  '4': {
    title: 'Phòng 4: Đạo đức Cách mạng',
    content: 'Đạo đức là "gốc" của người cách mạng. Hồ Chí Minh nhấn mạnh: "Trời có bốn mùa: Xuân, Hạ, Thu, Đông. Đất có bốn phương: Đông, Tây, Nam, Bắc. Người có bốn đức... Thiếu một đức, thì không thành người".',
    gameType: 'fill_in_the_blank',
    gameData: {
      question: 'Từ khóa còn thiếu trong 4 đức tính cốt lõi của người cách mạng: "Cần - Kiệm - Liêm - ____"',
      answer: 'chính'
    }
  },
  '5': {
    title: 'Phòng 5: Đại Đoàn Kết Toàn Dân Tộc',
    content: 'Đại đoàn kết toàn dân tộc không phải là sách lược nhất thời mà là chiến lược lâu dài. Hồ Chí Minh khẳng định: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công". Lòng khoan dung, độ lượng là cơ sở để quy tụ mọi tầng lớp nhân dân.',
    gameType: 'multiple_choice',
    gameData: {
      question: 'Trong tư tưởng Hồ Chí Minh, lực lượng làm nền tảng cho khối đại đoàn kết toàn dân tộc là liên minh giữa các giai tầng nào?',
      choices: [
        'Công nhân, Nông dân và Trí thức',
        'Công nhân và Tiểu tư sản',
        'Tư sản dân tộc và Nông dân',
        'Nông dân và Địa chủ yêu nước'
      ],
      answer: 'Công nhân, Nông dân và Trí thức'
    }
  }
};

const EscapeRoom = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { completeRoom, completedRooms } = useContext(GameContext);
  const [showSuccess, setShowSuccess] = useState(false);

  const room = roomData[roomId];
  const isAlreadyCompleted = completedRooms.includes(roomId);

  if (!room) return <div>Data Archives Corrupted! Báo cáo quản trị hệ thống.</div>;

  const handleGameComplete = () => {
    completeRoom(roomId);
    setShowSuccess(true);
    setTimeout(() => {
      navigate('/home');
    }, 2500);
  };

  return (
    <div className="room-container glass-panel">
      <h2 className="room-title brand-text">{room.title}</h2>
      
      {!showSuccess && !isAlreadyCompleted && (
        <>
          <div className="room-content">{room.content}</div>
          <MiniGame 
            type={room.gameType} 
            data={room.gameData} 
            onComplete={handleGameComplete} 
          />
        </>
      )}

      {isAlreadyCompleted && !showSuccess && (
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <h3 style={{ color: 'var(--success)', fontSize: '2rem', marginBottom: '1.5rem' }}>
            <span style={{ marginRight: '10px' }}>✓</span>
            Mật mã không gian đã được giải!
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Dữ liệu của khu vực này đã được đồng bộ.</p>
          <button className="btn" onClick={() => navigate('/home')}>
            Trở về Trung Tâm Chỉ Huy
          </button>
        </div>
      )}

      {showSuccess && (
        <div style={{ textAlign: 'center', marginTop: '2rem', animation: 'pulse 1s infinite alternate' }}>
          <h2 style={{ color: 'var(--success)', fontSize: '2.5rem', marginBottom: '1rem', textShadow: '0 0 20px var(--success)' }}>
            MỞ KHÓA THÀNH CÔNG!
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-light)' }}>
            Bạn đã nhận được 1 Mảnh Ghép 🔑<br/><br/>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Đang tự động chuyển hướng...</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default EscapeRoom;
