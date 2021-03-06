import React from 'react';
import { useEffect ,useState , useRef  } from 'react';
import styled, {css} from 'styled-components'
import SearchMovie from './SerchMovie';

export default function ModalWindow() {
    const [modal , setModal ] = useState(false);


    return (
        <ModalContainer>
            <button onClick={() => setModal(true)}>Open</button>

            {/* modalがtrueの場合、is-openedクラスを付与 */}
            <div className={`modal__overlay ${modal && "is-opened"}`}>
                <div className="modal__box">

                {/* ボタンクリック後、modalをfalseに変更 */}
                <button className="modal__closeBtn" onClick={() => setModal(false)}>×</button>
                <div className="modal__inner">
                    <SearchMovie />
                </div>
                </div>
            </div>
        </ModalContainer>
    )
}

const ModalContainer = styled.div`


.modal__overlay{

    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    /* 初期状態は非表示 */
    opacity: 0;
    visibility: hidden;
    /* ゆっくり表示させる */
    transition: opacity .3s, visibility .3s;
}
/* モーダル表示(modalがtrueになったら付与される) */
.is-opened{
  visibility: visible;
  opacity: 1;
}
.modal__box{
    width:65%;
    max-height:50vh;
    background-color: #fff;
    padding: 30px 20px;
    position: relative;
    overflow-y:scroll;
}

.modal__inner {
    position:relative;

}
.modal__closeBtn{
  position: absolute;
  top: 0;
  right: 0;
}
`;