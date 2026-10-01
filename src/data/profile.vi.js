// Vietnamese overrides for profile.js, keyed by id. Only translated fields are
// listed; everything else (names, links, tech tags) comes from the English
// source. When a bullet changes in profile.js, change it here too.

export const VI = {
  profile: {
    intro:
      'Kỹ sư full-stack tại Hà Nội. Phần lớn thời gian tôi dành cho kiến trúc backend: phân tách service, luồng event-driven với Kafka, caching và tìm kiếm. Tôi cũng xây dựng giao diện React và smart contract chạy phía trên.',
    role: 'Kỹ sư Full-Stack',
    location: 'Hà Nội, Việt Nam',
    availability: 'Sẵn sàng cho những bài toán thú vị',
    bio: [
      'Tôi là kỹ sư Full-Stack, xây dựng sản phẩm từ đầu đến cuối — API và cơ sở dữ liệu ở backend, giao diện responsive ở frontend và smart contract on-chain.',
      'Hơn 4 năm qua 4 công ty, tôi đã triển khai nền tảng tuyển dụng, hệ thống bỏ phiếu thời gian thực, ứng dụng SocialFi và công cụ quản trị nội bộ. Phần lớn thời gian tôi tập trung vào kiến trúc backend: phân tách service, luồng event-driven với Kafka, caching và tìm kiếm.',
      'Hiện tôi làm việc tại SotaTek JSC, phát triển nền tảng AI SotaAgents và các dự án outsourcing cho doanh nghiệp Nhật Bản.',
    ],
  },

  education: {
    utc: {
      school: 'Trường Đại học Giao thông Vận tải (UTC)',
      degree: 'Cử nhân Công nghệ Thông tin',
      note: 'Loại Khá',
    },
    fpt: {
      school: 'Cao đẳng FPT Polytechnic',
      degree: 'Lập trình Mobile',
      note: 'Loại Giỏi',
    },
  },

  skills: {
    backend: {
      summary:
        'Hơn 3 năm xây dựng API production và hệ thống phân tán với Node.js. Microservices có ranh giới rõ ràng, luồng event-driven qua Kafka (Saga, CQRS), realtime qua WebSocket, xử lý nền với Bull.',
    },
    frontend: {
      summary:
        'Giao diện SPA và SSR với React và Next.js, type-safe từ đầu đến cuối. Kết nối ví và đọc/ghi on-chain qua Ethers.js và Web3.js.',
    },
    blockchain: {
      summary:
        'Viết, kiểm thử và triển khai smart contract trên BNB Chain và Aptos/Movement, tích hợp vào web app production.',
    },
    ai: {
      summary:
        'Đưa tính năng LLM vào backend: gọi API model sau NestJS, truy xuất embedding trong vector store, tool calling và MCP server. AI coding agent là một phần trong quy trình làm việc hằng ngày.',
    },
    data: {
      label: 'Dữ liệu & lưu trữ',
      summary:
        'Thiết kế schema cho cả cơ sở dữ liệu quan hệ và NoSQL, Redis Cluster cho cache sẵn sàng cao, chuyển tìm kiếm từ Solr sang Elasticsearch với đồng bộ đa cơ sở dữ liệu.',
    },
    devops: {
      summary:
        'Container hoá service, CI/CD qua GitHub Actions và GitLab Runner, triển khai và giám sát trên AWS, Nginx và Kong ở phía trước.',
    },
    languages: {
      label: 'Ngoại ngữ',
      summary:
        'Tiếng Việt là tiếng mẹ đẻ. Tiếng Anh chứng chỉ B1 — đọc tài liệu kỹ thuật, review code và trao đổi bằng văn bản thoải mái.',
      items: ['Tiếng Việt (bản ngữ)', 'Tiếng Anh (B1)'],
    },
  },

  projects: {
    sotaagents: {
      sub: 'Nền tảng AI workspace cho doanh nghiệp',
      role: 'Kỹ sư Full-Stack',
      summary:
        'AI workspace đa tenant: chat với Claude, GPT và Gemini, trả lời dựa trên tài liệu của doanh nghiệp, mở rộng bằng app cài thêm và công cụ MCP.',
      highlights: [
        {
          title: 'Chat đa model',
          text: 'Claude, GPT và Gemini trong cùng một workspace. Admin chọn model nào tổ chức được dùng và đặt model mặc định.',
        },
        {
          title: 'Trả lời có căn cứ',
          text: 'Knowledge Base kết hợp tìm kiếm vector và full-text, kèm trích dẫn nguồn. Đồng bộ tài liệu từ Drive, OneDrive và SharePoint.',
        },
        {
          title: 'Nền tảng app',
          text: 'App có phiên bản, bổ sung tool, skill và giao diện native qua manifest, chạy trên backend riêng và phát hành Staging → Production → App Store.',
        },
        {
          title: 'MCP hai chiều',
          text: 'Workspace kết nối MCP server như Linear, Notion, Slack, GitHub; agent bên ngoài cũng gọi được tool của nền tảng qua MCP.',
        },
        {
          title: 'Guardrails',
          text: 'Chặn prompt injection và jailbreak, che dữ liệu cá nhân, kiểm duyệt đầu ra của tool và tài liệu trước khi model sử dụng.',
        },
        {
          title: 'Nhúng ở mọi nơi',
          text: 'Chat widget công khai, hoặc Embed SDK chạy ngay trong cổng thông tin của đối tác với ticket ký HMAC, dùng một lần, hiệu lực 60 giây.',
        },
        {
          title: 'Xuất file văn phòng',
          text: 'Tạo file Word, Excel, PDF, PowerPoint, sơ đồ, hình ảnh và trang web nhỏ ngay từ một tin nhắn chat.',
        },
        {
          title: 'Quản trị doanh nghiệp',
          text: 'Tổ chức và workspace với phân quyền theo vai trò, tính credit theo từng lượt chat và audit log.',
        },
      ],
      bullets: [
        'Xây dựng MCP server cung cấp Knowledge Base và các bộ tool lõi cho agent bên ngoài, kèm định giá theo từng tool, đo đếm credit và cho phép admin ghi đè giá.',
        'Mở rộng sổ cái credit để ghi lại model trả lời, workspace và thống kê tài liệu theo từng lượt, kèm backfill dữ liệu cũ, xuất CSV và panel chi tiết trong console.',
        'Tăng cường bảo mật nền tảng app: thông tin định danh người dùng chỉ được cấp khi manifest khai báo quyền rõ ràng, và manifest được kiểm tra theo danh mục tool lõi.',
        'Triển khai xoá tổ chức theo cơ chế xoá dây chuyền trên workspace, hội thoại, MCP server và dữ liệu thanh toán, có audit log và test kiểm tra không bỏ sót dữ liệu.',
        'Bổ sung phân quyền cho giao diện app Knowledge Base: admin được ghi, thành viên chỉ đọc, xử lý lỗi 403 trên mọi thao tác ghi.',
      ],
    },
    careerviet: {
      sub: 'Nền tảng tuyển dụng',
      role: 'Kỹ sư Backend',
      summary: 'Chuyển hệ thống PHP monolith quy mô lớn sang nền tảng microservices NestJS.',
      bullets: [
        'Thiết kế và dẫn dắt việc chuyển PHP monolith sang microservices NestJS, giúp các service tách biệt và triển khai độc lập.',
        'Triển khai kiến trúc event-driven với Kafka + Saga pattern để giữ nhất quán giao dịch phân tán giữa PostgreSQL, MongoDB và Oracle PL/SQL.',
        'Chuyển hệ thống tìm kiếm từ Solr sang Elasticsearch, đồng bộ đa cơ sở dữ liệu theo thời gian thực.',
        'Thiết lập Redis Cluster cho cache sẵn sàng cao và Kong Gateway để quản lý tập trung lưu lượng API.',
      ],
    },
    acanet: {
      role: 'Lập trình viên Fullstack & Blockchain',
      award: 'Á quân — Movement Olympus Hackathon',
      summary: 'Mạng SocialFi và Telegram mini-app tự động hoá các chiến dịch airdrop quy mô lớn.',
      bullets: [
        'Phát triển mạng SocialFi và Telegram mini-app để vận hành và quản lý các chiến dịch airdrop lưu lượng lớn.',
        'Phát triển và triển khai smart contract trên BNB Chain và Aptos/Movement bằng Solidity.',
        'Xây dựng tính năng realtime qua WebSocket và chuyển việc phân phối token sang hàng đợi nền Bull.',
      ],
    },
    boffice: {
      sub: 'Bộ phần mềm quản trị doanh nghiệp',
      role: 'Kỹ sư Backend',
      summary: 'Các module tuyển dụng, chấm công và thư viện cho thị trường trong nước và quốc tế.',
      bullets: [
        'Phát triển các module lõi: tuyển dụng, chấm công và quản lý thư viện.',
        'Triển khai cập nhật realtime qua WebSocket và tài liệu hoá API bằng Swagger.',
        'Quản lý triển khai và hạ tầng máy chủ với Docker, Nginx và GitLab Runner.',
      ],
    },
    bvote: {
      sub: 'Nền tảng bỏ phiếu trực tuyến',
      role: 'Kỹ sư Fullstack',
      summary: 'Nền tảng Đại hội đồng cổ đông trực tuyến bảo mật, xây dựng trên MERN stack.',
      bullets: [
        'Xây dựng nền tảng ĐHĐCĐ trực tuyến bảo mật trên MERN stack cho các phiên bỏ phiếu minh bạch, sẵn sàng cao.',
        'Thiết kế hệ thống phân quyền theo vai trò và các module quản trị dữ liệu cổ đông và nội dung bầu cử.',
        'Cập nhật kết quả bỏ phiếu trực tiếp bằng Socket.io cho lượng lớn người dùng đồng thời.',
        'Tự động hoá triển khai trên máy chủ riêng với Docker, Nginx và GitLab Runner.',
      ],
    },
  },

  experience: {
    sotatek: {
      role: 'Kỹ sư phần mềm',
      bullets: [
        'Phát triển SotaAgents, nền tảng AI workspace doanh nghiệp của công ty: MCP server, đo đếm credit, phân quyền nền tảng app và các tính năng admin console.',
        'Cung cấp giải pháp phần mềm outsourcing cho doanh nghiệp Nhật Bản.',
        'Phát triển và quản lý các dự án outsourcing theo tiêu chuẩn chất lượng khắt khe của khách hàng.',
      ],
    },
    igbsoft: {
      role: 'Kỹ sư Backend',
      bullets: [
        'Chuyển hệ thống PHP cũ sang kiến trúc microservices với NestJS, Kafka và Redis.',
        'Tối ưu hiệu năng API và độ ổn định hệ thống cho nền tảng tuyển dụng quy mô lớn.',
      ],
    },
    dath: {
      role: 'Lập trình viên Fullstack & Blockchain',
      bullets: [
        'Phát triển nền tảng SocialFi và Telegram MiniApp với tính năng realtime.',
        'Xây dựng và triển khai smart contract trên BNB Chain và Aptos/Movement.',
      ],
    },
    bytesoft: {
      role: 'Kỹ sư Backend',
      bullets: [
        'Phát triển phần mềm vận hành doanh nghiệp (BOffice), tập trung vào module tuyển dụng và chấm công.',
        'Triển khai REST API, GraphQL và WebSocket cho thị trường quốc tế.',
      ],
    },
  },

  awards: {
    olympus: { title: 'Á quân — Movement Olympus Hackathon' },
  },
};
