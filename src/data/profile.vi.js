// Vietnamese overrides for profile.js, keyed by id. Only translated fields are
// listed; everything else (names, links, tech tags) comes from the English
// source. When a bullet changes in profile.js, change it here too.

export const VI = {
  profile: {
    intro:
      'Software & AI Platform Engineer tại Hà Nội. Tôi thiết kế các hệ thống phân tán chịu tải cao với NestJS microservices, Kafka, Redis Cluster và Elasticsearch, đồng thời xây dựng hạ tầng AI Agent thực chiến — MCP server, LLM gateway đa nhà cung cấp và hybrid RAG — làm chủ sản phẩm đầu cuối qua React/Next.js và AWS.',
    focus: 'Hệ thống phân tán, AI Agent & Microservices',
    role: 'Software & AI Platform Engineer',
    tagline: 'Software Engineering · Hệ thống phân tán · Hạ tầng AI Agent · Full-Stack',
    location: 'Hà Nội, Việt Nam',
    availability: 'Sẵn sàng cho các vị trí Software & AI Platform Engineer',
    bio: [
      'Software & AI Platform Engineer với hơn 4 năm kinh nghiệm thiết kế hệ thống phân tán chịu tải cao bằng NestJS microservices, Kafka (Saga/CQRS), Redis Cluster và Elasticsearch.',
      'Thực chiến xây dựng hạ tầng AI Agent production: MCP server đa tenant, LLM gateway đa nhà cung cấp tự động failover, đo đếm credit theo lượt và Qdrant hybrid RAG.',
      'Làm chủ sản phẩm đầu cuối (Full-Stack) với React/Next.js, TypeScript và Docker/AWS CI/CD từ thiết kế kiến trúc đến vận hành ổn định.',
    ],
  },

  education: {
    utc: {
      school: 'Trường Đại học Giao thông Vận tải (UTC)',
      degree: 'Cử nhân Công nghệ Thông tin',
      note: 'Tốt nghiệp loại Khá',
    },
    fpt: {
      school: 'Cao đẳng FPT Polytechnic',
      degree: 'Cao đẳng Lập trình Mobile',
      note: 'Tốt nghiệp loại Giỏi',
    },
  },

  skills: {
    backend: {
      label: 'Backend & Hệ thống phân tán',
      summary:
        'Hơn 4 năm xây dựng API production và hệ thống phân tán với Node.js và TypeScript. NestJS microservices tách biệt theo miền nghiệp vụ, luồng event-driven qua Kafka (Saga, CQRS), realtime qua WebSocket và xử lý nền tải cao với BullMQ.',
    },
    ai: {
      label: 'Hạ tầng AI / LLM & Agent',
      summary:
        'Kỹ thuật nền tảng AI trên production: MCP server đa tenant, LLM gateway tự host đa nhà cung cấp kèm failover và điều phối hạn mức, hybrid RAG (vector + full-text), đo đếm credit theo lượt và lớp kiểm duyệt an toàn (guardrails).',
    },
    data: {
      label: 'Dữ liệu, Caching & Tìm kiếm',
      summary:
        'Thiết kế lưu trữ đa cơ sở dữ liệu (quan hệ & NoSQL), Redis Cluster sẵn sàng cao, và đồng bộ tìm kiếm thời gian thực đa nguồn với Elasticsearch và OpenSearch.',
    },
    devops: {
      label: 'DevOps & Đám mây',
      summary:
        'Container hoá dịch vụ, tự động hoá CI/CD qua GitHub Actions và GitLab Runner, triển khai và giám sát trên AWS, vận hành Nginx và API Gateway.',
    },
    frontend: {
      label: 'Frontend & Web',
      summary:
        'Phát triển giao diện SPA và SSR type-safe đầu cuối với React và Next.js — trang quản trị, dashboard giám sát lưu lượng, Embed SDK và tích hợp ví Web3.',
    },
    blockchain: {
      label: 'Blockchain / Web3',
      summary:
        'Thiết kế và triển khai smart contract tối ưu phí gas trên BNB Chain và Aptos/Movement, xác thực nhận thưởng bằng Merkle-proof kết hợp worker xử lý đồng thời cao.',
    },
    languages: {
      label: 'Ngoại ngữ',
      summary:
        'Sử dụng tiếng Anh chuyên nghiệp trong đọc hiểu tài liệu kiến trúc, code review và phối hợp kỹ thuật bằng văn bản.',
      items: ['Tiếng Anh (Chuyên nghiệp trong công việc)'],
    },
  },

  projects: {
    sotaagents: {
      sub: 'Nền tảng AI Workspace đa tenant cho doanh nghiệp',
      role: 'Software & AI Platform Engineer',
      summary:
        'Nền tảng AI workspace đa tenant phục vụ hơn 10 doanh nghiệp — hợp nhất Claude, GPT và Gemini với hybrid RAG, hệ sinh thái app cài thêm trên backend riêng và hạ tầng công cụ MCP hai chiều.',
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
        'Thiết kế MCP server đa tenant cung cấp Knowledge Base (Qdrant hybrid RAG) và danh mục tool động từ các app cho 10+ doanh nghiệp, tích hợp định giá theo tool, đo đếm credit và ghi đè giá cho admin.',
        'Xây dựng sổ cái credit theo lượt ghi nhận model trả lời, ngữ cảnh workspace và thống kê truy xuất tài liệu, hỗ trợ backfill lịch sử, xuất đối soát CSV và tra cứu trực tiếp trên console.',
        'Siết chặt biên bảo mật sandbox đa app bằng cơ chế cấp quyền định danh theo manifest tường minh, vé nhúng ký HMAC 60 giây dùng một lần và kiểm chứng schema đối chiếu danh mục tool lõi.',
        'Triển khai pipeline xoá tổ chức dây chuyền (cascading purge) qua workspace, hội thoại, MCP và sổ cái thanh toán kèm audit log bất biến, test kiểm chứng toàn vẹn và phân quyền RBAC.',
      ],
    },
    'llm-gateway': {
      sub: 'LLM Gateway đa nhà cung cấp mã nguồn mở',
      role: 'Tác giả & Maintainer (Open-Source)',
      summary:
        'Gateway NestJS + Fastify tự host cung cấp endpoint chuẩn OpenAI, Anthropic và Gemini đứng trước nhiều nhà cung cấp LLM, tích hợp định tuyến regex, tự động failover và điều phối hạn mức đa tài khoản.',
      bullets: [
        'Kiến trúc hoá proxy gateway trên NestJS + Fastify hợp nhất 4 nhà cung cấp LLM (OpenAI, Anthropic Claude, Google Gemini, GitHub Copilot) sau chuẩn API OpenAI, Anthropic, Gemini kèm định tuyến regex và tự động phát hiện model.',
        'Xây dựng credential pool chịu lỗi: điều phối round-robin, sticky, cache-first, tự động làm mới OAuth/token, cooldown khi gặp 429, chuỗi failover liên nhà cung cấp và khôi phục thought-signature trên RAM cho các model suy luận.',
        'Phát triển quản lý API key băm có phân quyền RBAC trên SQLite/TypeORM với cache xác thực <1ms trên bộ nhớ, tự chạy migration khi khởi động và dashboard quan sát lưu lượng React/Vite nhúng sẵn.',
        'Tự động hoá kiểm tra kiểu, xác thực migration và xuất bản multi-stage Docker image lên GHCR qua GitHub Actions giúp triển khai VPS chỉ với một lệnh.',
      ],
    },
    careerviet: {
      sub: 'Nền tảng tuyển dụng — Chuyển đổi Microservices',
      role: 'Backend Engineer',
      summary:
        'Phân rã hệ thống PHP monolith lưu lượng lớn sang hơn 12 NestJS microservices hướng sự kiện, phục vụ hơn 5 triệu ứng viên, 25.000+ doanh nghiệp và 2 triệu+ tin tuyển dụng & lượt ứng tuyển mỗi năm.',
      bullets: [
        'Phân rã hệ thống PHP monolith sang 12+ NestJS microservices độc lập theo miền nghiệp vụ phía sau Kong Gateway, phục vụ 5M+ ứng viên, 25K+ doanh nghiệp và 2M+ tin & lượt ứng tuyển mỗi năm.',
        'Điều phối giao dịch phân tán bằng Kafka + Saga pattern qua PostgreSQL, MongoDB và Oracle PL/SQL, bảo toàn tính nhất quán dữ liệu ở mức ghi đồng thời cao mà không gây khoá chéo DB.',
        'Chuyển đổi tìm kiếm toàn văn từ Apache Solr sang Elasticsearch đồng bộ sự kiện thời gian thực từ ba hệ cơ sở dữ liệu, giảm ~35% độ trễ tìm kiếm việc làm (p95).',
        'Triển khai Redis Cluster sẵn sàng cao kết hợp chính sách định tuyến và giới hạn lưu lượng tập trung tại Kong Gateway, giảm ~40% tải truy vấn đọc lặp lại lên DB quan hệ chính.',
      ],
    },
    acanet: {
      sub: 'SocialFi & Telegram MiniApp',
      role: 'Full-Stack & Blockchain Engineer',
      award: 'Á quân — Movement Olympus Hackathon',
      summary:
        'Siêu ứng dụng SocialFi và Telegram MiniApp chịu tải cao vận hành các chiến dịch airdrop ACN — hệ thống nhiệm vụ, giới thiệu đa tầng và nhận thưởng on-chain bằng Merkle-proof trên BNB Chain và Aptos/Movement.',
      bullets: [
        'Phát triển backend SocialFi và Telegram MiniApp (NestJS, Next.js, PostgreSQL, OpenSearch) với xác thực chữ ký initData, bảng tin đồ thị xã hội, bộ máy nhiệm vụ và hệ thống giới thiệu đa tầng.',
        'Xây dựng hàng đợi Bull/Redis có khoá chống trùng lặp (idempotent) để trả thưởng theo lô kèm bộ lọc anti-sybil và sổ cái quy đổi điểm ACN, truyền phát trạng thái nhận thưởng trực tiếp qua WebSocket.',
        'Thiết kế và triển khai smart contract Solidity (BNB Chain) và Move (Aptos/Movement) ứng dụng chứng minh Merkle-proof nhằm tối ưu chi phí gas nhận thưởng cho từng ví.',
      ],
    },
    boffice: {
      sub: 'Bộ phần mềm quản trị vận hành doanh nghiệp',
      role: 'Backend Engineer',
      summary:
        'Hệ thống backend ERP đa phân hệ (tuyển dụng, chấm công, quản lý tài liệu) cho doanh nghiệp trong nước và quốc tế.',
      bullets: [
        'Phát triển các phân hệ backend cốt lõi bằng NestJS, MySQL và Redis cho nghiệp vụ tuyển dụng, chấm công và quản lý tài liệu, hỗ trợ thông báo realtime qua WebSocket và chuẩn hoá tài liệu OpenAPI/Swagger.',
        'Tự động hoá đóng gói container và định tuyến reverse-proxy trên máy chủ Linux bằng Docker, Nginx và GitLab CI/CD.',
      ],
    },
    bvote: {
      sub: 'Nền tảng bỏ phiếu cổ đông trực tuyến thời gian thực',
      role: 'Full-Stack Engineer',
      summary:
        'Nền tảng tổ chức và kiểm phiếu Đại hội đồng cổ đông (ĐHĐCĐ) trực tuyến sẵn sàng cao theo thời gian thực.',
      bullets: [
        'Xây dựng nền tảng bỏ phiếu ĐHĐCĐ trực tuyến bảo mật trên Node.js, Express, MongoDB và React với phân quyền RBAC chặt chẽ và luồng kiểm phiếu minh bạch.',
        'Triển khai tổng hợp phiếu bầu trực tiếp đồng thời cao qua Socket.io + Redis và tự động hoá phát hành bằng Docker, Nginx và GitLab Runner.',
      ],
    },
  },

  experience: {
    sotatek: {
      role: 'Software & AI Platform Engineer',
      bullets: [
        'Làm chủ kiến trúc nền tảng AI & Agent cho SotaAgents phục vụ 10+ tổ chức doanh nghiệp — thiết kế MCP server hai chiều, danh mục công cụ động từ app và hệ thống tính phí credit theo lượt.',
        'Thiết lập biên bảo mật đa tenant theo mô hình zero-trust trên các app backend độc lập, kết hợp cấp quyền theo manifest, RBAC cấp workspace và quản trị vòng đời dữ liệu đạt chuẩn kiểm toán.',
        'Thiết kế và bàn giao các hệ thống phân tán full-stack trên NestJS, React/Next.js, Docker và AWS cho khách hàng doanh nghiệp Nhật Bản với hợp đồng API chặt chẽ và độ tin cậy phát hành cao.',
      ],
    },
    igbsoft: {
      role: 'Backend Engineer',
      note: 'Hợp đồng dự án',
      bullets: [
        'Dẫn dắt quá trình chuyển đổi (strangler-fig) hệ thống PHP monolith của CareerViet sang 12+ NestJS microservices độc lập phía sau Kong Gateway, tách biệt chu kỳ triển khai giữa các nhóm miền nghiệp vụ.',
        'Hiện đại hoá hạ tầng nhất quán dữ liệu và tìm kiếm qua Kafka Saga, Elasticsearch và Redis Cluster — giảm ~35% độ trễ tìm kiếm p95 và ~40% tải đọc trên cơ sở dữ liệu chính.',
      ],
    },
    dath: {
      role: 'Full-Stack & Blockchain Engineer',
      note: 'Hợp đồng dự án',
      bullets: [
        'Phụ trách đầu cuối mảng backend chịu tải cao và smart contract cho hệ sinh thái SocialFi & Telegram MiniApp của Acanet, đạt giải Á quân toàn cầu tại Movement Olympus Hackathon.',
        'Xây dựng hạ tầng phân phối phần thưởng đa chuỗi trên BNB Chain (Solidity) và Aptos/Movement (Move), kết hợp hàng đợi trả thưởng Bull/Redis chống trùng lặp với cơ chế nhận thưởng Merkle-proof tiết kiệm gas.',
      ],
    },
    bytesoft: {
      role: 'Backend Engineer',
      bullets: [
        'Xây dựng và mở rộng backend ERP đa phân hệ (BOffice — tuyển dụng, chấm công, tài liệu) và hệ thống bỏ phiếu cổ đông trực tuyến thời gian thực (Bvote) trên NestJS, Node.js, MySQL, MongoDB và Redis.',
        'Chuẩn hoá hợp đồng API REST, GraphQL và Socket.io/WebSocket song song với quy trình Docker, Nginx và GitLab CI/CD, rút ngắn chu kỳ phát hành và nâng cao độ ổn định vận hành.',
      ],
    },
  },

  awards: {
    olympus: {
      title: 'Á quân — Movement Olympus Hackathon',
      subtitle: 'Movement Labs · Hệ sinh thái Web3 & Move toàn cầu',
    },
  },
};
