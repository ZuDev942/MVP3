Làm màn nhân viên Moshop với:
	Figma: https://www.figma.com/file/zKSHeKKkD21xoAHKh2MiHw/Huongcm?node-id=245%3A0
	API: Import file Staff.postman_collection.json vào postman để lấy API
	
	Tài khoản đăng nhập: hncp7@gmail.com/Reset0301
	Một số thông tin thêm: 
	    + Popup Cài đặt KPIS nhân viên có 1 số type của NV
			NV Online: 
			[
				{ type: 'all', text: 'Nhận tất cả hội thoại' },
				{ type: 'share_work', text: 'Nhận phần hội thoại được chia đều' },
				{ type: 'first_view', text: 'Nhận phần hội thoại bấm xem trước tiên' },
				{ type: 'first_reply', text: 'Nhận phần hội thoại trả lời trước tiên' },
				{ type: 'first_deal', text: 'Nhận phần hội thoại chốt đơn trước tiên' }
			],
			NV Offline
			[
			   { type: 'keep', text: 'Tiếp tục hội thoại sau khi Offline' },
			   { type: 'share', text: 'Chuyển hội thoại chưa trả lời cho NV Online' }
			]
			
			Nếu tick chọn Nhận tất cả hội thoại trong phần NV Online thì sẽ ẩn phần NV offline còn chọn các option khác thì phần NV Offline vẫn hiển thị bình thường
			
		+ Khi thêm / sửa nhân viên, phần màn hình được sử dụng trong phần thông tin công việc thì nếu chọn Chats chốt đơn hiển thị list page và bắt buộc phải chọn page
			Một số type của các màn hình cần cho api tạo/sửa đơn:
				sale: Chat chốt đơn, 
				chat_ops: Chat vận hành, 
				statistic: Tổng quan, 
				order: Đơn hàng, 
				customer: Khách hàng, 
				product: Kho sp, 
				staff: Nhân viên

          .fade-loading {
            width: 4rem;
            height: 4rem;
            background-color: var(--pink);
            border-radius: 5rem;
            margin: 2rem auto;
            position: relative;
          }
          .fade-loading:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: inherit;
            background-color: inherit;
            animation: fade 1s forwards infinite linear;
          }
          @keyframes fade {
            to {
              transform: scale(2);
              opacity: 0;
            }
          }