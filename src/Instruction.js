import React from "react";
import "./App.css";
export function Instruction(){
    return(
        <p className="instructions">
        Hướng dẫn chơi trò chơi tô màu Level 1:
        <br />
        1. Hãy chọn và tô vào bức tranh các màu tương ứng giống với bức tranh mẫu
        <br />
        2. Khi tất cả mảnh hoa đã được tô màu đúng thứ tự, bạn sẽ hoàn thành trò
        chơi.
        <br />
        Gợi ý: Hãy nhấn vào màu đỏ và tô vào cánh hoa đầu tiên, thực hiện tương tự với các cánh hoa còn lại.
      </p>
    );
}