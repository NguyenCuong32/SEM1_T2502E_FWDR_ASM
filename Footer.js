function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4"> {/* Footer with dark background, white text, and padding dọc (top&bottom) là 1rem (16px) */}
            <div className="brand flex justify-center items-center gap-4"> {/* Flex container sắp xếp các phần tử theo hàng ngang mặc định, centered content , and gap between items căn nội dung giữa theo chiều ngang và dọc, tạo khoảng cách giữa các phần tử con là 16px */}
                <img src="../iconNhac.jpg" alt="icon" className="w-8 h-8" /> {/* Icon with width and height of 8 chiều rộng là 2rem, chiều cao là 2rem (32px)*/}
                <h3 className="text-lg font-semibold">Musical Entertainment</h3> {/* Text with large font size and bold font */}
                <img src="../iconNhac.jpg" alt="icon" className="w-8 h-8" /> {/* Icon with width and height of 8 */}
            </div>
        </footer>
    );
}
export default Footer;
