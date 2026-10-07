export interface GarmentDetail {
  id: string;
  label: string;
  text: string;
  direction?: 'left' | 'right';
}

export interface EraGarment {
  id: string;
  slug: string;
  index: string;
  eraName: string;
  dynastyName: string;
  period: string;
  garmentName: string;
  title: string;
  subtitle: string;
  description: string;
  curatorNote: string;
  accessionNumber: string;
  image: string;
  colors: { name: string; hex: string }[];
  details: GarmentDetail[];
  modernRemixNote: string;
}

export const ERAS_DATA: EraGarment[] = [
  {
    id: 'ly',
    slug: 'ao-giao-linh-thoi-ly',
    index: '01',
    eraName: 'Thời Lý',
    dynastyName: 'Triều Lý',
    period: '1009 - 1225',
    garmentName: 'Áo Giao Lĩnh',
    title: 'Nét Thanh Thoát Của Nền Văn Hiến Sớm',
    subtitle: 'Vạt giao lĩnh buông mềm trong gió Đại Việt',
    description: 'Áo Giao Lĩnh thời Lý mang dáng dấp cổ giao chéo vạt trang nhã, phản ánh tinh thần Phật giáo thanh tịnh và văn hóa thẩm mỹ tinh tế của thời kỳ định đô Thăng Long.',
    curatorNote: 'Trang phục thể hiện sự giao thoa giữa cấu trúc nghi lễ cung đình và nét thanh tao dung dị của người Việt cổ, với chất liệu tơ tằm mềm rủ.',
    accessionNumber: 'VN-COL.1009.LY',
    image: '/src/assets/images/garment_ly_dynasty_1791359677461.jpg',
    colors: [
      { name: 'Hoàng Thổ', hex: '#D4AF37' },
      { name: 'Lụa Mộc', hex: '#E6DEC9' },
      { name: 'Mực Mun', hex: '#1C1917' }
    ],
    details: [
      {
        id: 'nguon-goc',
        label: 'NGUỒN GỐC',
        text: 'Hình thành và hoàn thiện trong giai đoạn đầu độc lập tự chủ, đánh dấu bản sắc phục sức riêng biệt thời Thăng Long.',
        direction: 'left'
      },
      {
        id: 'chat-lieu',
        label: 'CHẤT LIỆU',
        text: 'Lụa tơ tằm dệt thủ công bản địa, sa trơn và đũi nhẹ, tạo độ rủ tự nhiên ôm lấy hình thể người mặc.',
        direction: 'left'
      },
      {
        id: 'phom-dang',
        label: 'PHOM DÁNG',
        text: 'Cổ giao chéo hai vạt đè lên nhau, tay áo thụng rộng buông dài qua bàn tay, thắt đai lụa ngang lưng.',
        direction: 'right'
      },
      {
        id: 'triet-ly',
        label: 'TRIẾT LÝ',
        text: 'Đề cao sự khiêm nhu, tự nhiên và cân bằng âm dương theo quan niệm mỹ học Đông Á thuần hậu.',
        direction: 'right'
      }
    ],
    modernRemixNote: 'Phối cùng áo phông cổ tròn tối giản bên trong, quần ống suông dệt thô và sneakers trắng tạo nên phong thái Zen hiện đại.'
  },
  {
    id: 'tran',
    slug: 'ao-trang-vat-thoi-tran',
    index: '02',
    eraName: 'Thời Trần',
    dynastyName: 'Triều Trần',
    period: '1225 - 1400',
    garmentName: 'Áo Tràng Vạt',
    title: 'Hào Khí Đông A Và Sự Vững Chãi',
    subtitle: 'Đường cắt dứt khoát của thời đại kiên cường',
    description: 'Trang phục thời Trần kế thừa nét giao lĩnh nhưng lược giản các chi tiết rườm rà, tạo nên vẻ khỏe khoắn, thực tế gắn liền với khí phách kiên dũng ba lần kháng chiến thắng lợi.',
    curatorNote: 'Sự tối giản trong đường may phản chiếu một xã hội trọng thực nghiệm và tinh thần thượng võ nhưng vẫn giữ trọn mực thước uy nghiêm.',
    accessionNumber: 'VN-COL.1225.TR',
    image: '/src/assets/images/garment_tran_dynasty_1791359689564.jpg',
    colors: [
      { name: 'Nâu Trầm', hex: '#634832' },
      { name: 'Xám Trầm Tích', hex: '#4B4E53' },
      { name: 'Vàng Ngà', hex: '#D9C8A9' }
    ],
    details: [
      {
        id: 'dac-trung',
        label: 'ĐẶC TRƯNG',
        text: 'Đường nẹp cổ vững vàng, vạt áo buông vừa vặn để thuận tiện di chuyển và cưỡi ngựa.',
        direction: 'left'
      },
      {
        id: 'chat-lieu',
        label: 'CHẤT LIỆU',
        text: 'Vải đũi gai, vải thô dệt dày dặn kết hợp viền thổ cẩm biểu trưng cho phẩm cấp quý tộc.',
        direction: 'left'
      },
      {
        id: 'phom-dang',
        label: 'PHOM DÁNG',
        text: 'Tay áo thu gọn hơn so với thời Lý, gấu áo thẳng tắp tạo cảm giác vững chãi và năng động.',
        direction: 'right'
      },
      {
        id: 'tinh-than',
        label: 'TINH THẦN',
        text: 'Thể hiện hào khí Đông A quật khởi, tôn vinh vẻ đẹp kỷ luật, sức mạnh nội tại và tinh thần tập thể.',
        direction: 'right'
      }
    ],
    modernRemixNote: 'Biến tấu thành áo khoác overshirt dáng kimono với chất liệu denim thô hoặc linen tự nhiên.'
  },
  {
    id: 'le',
    slug: 'ao-vien-linh-thoi-le',
    index: '03',
    eraName: 'Thời Lê',
    dynastyName: 'Triều Hậu Lê',
    period: '1428 - 1789',
    garmentName: 'Áo Viên Lĩnh',
    title: 'Đỉnh Cao Điển Chế Hoàng Triều',
    subtitle: 'Cổ tròn vương giả và gấm vóc rực rỡ',
    description: 'Thời Hậu Lê xác lập hệ thống lễ phục và thường phục hoàn chỉnh nhất. Áo Viên Lĩnh cổ tròn kết hợp bổ tử thêu chỉ kim tuyến thể hiện trật tự văn hiến mẫu mực.',
    curatorNote: 'Kỹ nghệ dệt gấm vóc Thăng Long thời kỳ này đạt trình độ thượng thừa với hoa văn sóng nước, rồng phượng và vân mây sắc sảo.',
    accessionNumber: 'VN-COL.1428.LE',
    image: '/src/assets/images/garment_le_dynasty_1791359700042.jpg',
    colors: [
      { name: 'Đỏ Điều', hex: '#8B1E1E' },
      { name: 'Hoàng Kim', hex: '#D4AF37' },
      { name: 'Thanh Lam', hex: '#1B365D' }
    ],
    details: [
      {
        id: 'dien-che',
        label: 'ĐIỂN CHẾ',
        text: 'Quy chuẩn lễ nhạc khắt khe, hoa văn bổ tử quy định rạch ròi giữa quan văn và quan võ.',
        direction: 'left'
      },
      {
        id: 'chat-lieu',
        label: 'CHẤT LIỆU',
        text: 'Gấm thượng hạng, đoạn thêu kim tuyến nổi, lót lụa tơ nhuộm màu tương phản tinh xảo.',
        direction: 'left'
      },
      {
        id: 'co-ao',
        label: 'CỔ ÁO',
        text: 'Cổ tròn cài khuy lệch bên vai phải, đường cong ôm khít tôn lên vẻ đĩnh đạc và uy quyền.',
        direction: 'right'
      },
      {
        id: 'di-san',
        label: 'DI SẢN',
        text: 'Là giai đoạn phục chế trang phục rực rỡ nhất trong các đợt phục dựng văn hóa thế kỷ 21.',
        direction: 'right'
      }
    ],
    modernRemixNote: 'Kết hợp cùng quần cargo tối màu và túi chéo techwear, mang hơi thở hoàng gia vào nhịp sống phố thị năng động.'
  },
  {
    id: 'nguyen',
    slug: 'ao-nhat-binh-thoi-nguyen',
    index: '04',
    eraName: 'Thời Nguyễn',
    dynastyName: 'Triều Nguyễn',
    period: '1802 - 1945',
    garmentName: 'Áo Nhật Bình',
    title: 'Biểu Tượng Trang Nhã Cố Đô',
    subtitle: 'Nẹp cổ ngũ hành và dải ngũ sắc kinh kỳ',
    description: 'Áo Nhật Bình là thường phục của bậc Hoàng thái hậu, Hoàng hậu, Công chúa và mệnh phụ triều Nguyễn. Điểm nhấn đặc trưng là viền cổ áo to bản thêu hoa văn ngũ hành tạo hình chữ nhật cân xứng.',
    curatorNote: 'Cùng với Áo Ngũ Thân tiền thân của Áo Dài hiện đại, Nhật Bình là đỉnh cao lưu giữ linh hồn trang phục cung đình Huế.',
    accessionNumber: 'VN-COL.1802.NG',
    image: '/src/assets/images/garment_nguyen_dynasty_1791359710243.jpg',
    colors: [
      { name: 'Xích Hồng', hex: '#9B1B30' },
      { name: 'Ngọc Bích', hex: '#1F563B' },
      { name: 'Hoàng Yến', hex: '#E5A93B' }
    ],
    details: [
      {
        id: 'nep-co',
        label: 'NẸP CỔ',
        text: 'Nẹp chữ nhật đối xứng trước ngực thêu rồng phượng, hoa lá, dải ngũ sắc ở hai bên cổ tay.',
        direction: 'left'
      },
      {
        id: 'chat-lieu',
        label: 'CHẤT LIỆU',
        text: 'Vải sa, gấm đoạn xứ Huế kết hợp kỹ thuật thêu tay truyền thống tỉ mỉ từng sợi chỉ.',
        direction: 'left'
      },
      {
        id: 'phom-dang',
        label: 'PHOM DÁNG',
        text: 'Áo xẻ tà trước ngực, cố định bằng dây buộc dệt hoa văn hoặc cúc vàng cài tinh tế.',
        direction: 'right'
      },
      {
        id: 'song-hanh',
        label: 'SONG HÀNH',
        text: 'Đi cùng áo ngũ thân lập lĩnh, đặt nền móng trường tồn cho Áo Dài biểu tượng của dân tộc.',
        direction: 'right'
      }
    ],
    modernRemixNote: 'Khoác hờ bên ngoài slip dress lụa hoặc áo blazer cấu trúc mỏng, điểm xuyết khăn vấn cách điệu.'
  }
];
