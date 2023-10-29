import React from "react";
import "./App.css";
export default function App(){
    return(
        <p className="instructions">
        Hướng dẫn chơi trò chơi tô màu theo số thứ tự:
        <br />
        1. Nhấn vào các mảnh hoa để tô màu chúng theo thứ tự từ 1 đến 7.
        <br />
        2. Chọn màu sắc từ bảng màu hàng ngang bên dưới và tô màu vào các mảnh
        hoa.
        <br />
        3. Khi tất cả mảnh hoa đã được tô màu đúng thứ tự, bạn sẽ hoàn thành trò
        chơi.
        <br />
        Gợi ý: Hãy nhấn vào số 1 và sau đó nhấn vào cánh hoa đang nhấp nháy để
        tô màu cánh hoa.
      </p>
    );
}