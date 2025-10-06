// import { useState } from 'react';

// // state with union string literal options
// type Options = 'success' | 'error' | 'warning';
// const option: Options = 'success'
// const [opcao, setOpcao] = useState<Options>('success');

// // state with an object that may be null
// type Data = { id: number; name: string } | null;
// const data: Data = { id: 2, name: 'joao' };
// const [dado, setDado] = useState<Data>(null);

// // state with a string initialized using a function
// type Token = string;
// const [token, setToken] = useState<Token>(() => {
//     return localStorage.getItem("token") || "";
// });

// // state with an array of numbers and explicit typing
// type Numbers = number[];
// const number: Numbers = [2, 3, 4, 5];
// const [numero, setNumero] = useState<Numbers>([2, 3, 4, 5]);

// // state with an object representing a logged-in user or null
// type UserLogin = { user: string; logged: boolean } | null;
// const userLogin: UserLogin = { user: 'joao', logged: true };
// const [usuario, setUsuario] = useState<UserLogin>({ user: 'joao', logged: true });

// // state with a boolean used to show or hide a modal
// type ModalShow = boolean;
// const modalShow: ModalShow = false;
// const [modalVisible, setModalVisible] = useState<ModalShow>(true);

// // state with explicit number and string types
// type Price = number;
// const price: Price = 0;
// const [priceState, setPriceState] = useState<Price>(0);

// // state with an array of strings and numbers
// type StringList = string[];
// const stringList: StringList = ["a", "b"];
// const [items, setItems] = useState<StringList>(["a", "b"]);

// // state with union types
// type SelectedId = number | undefined;
// const selectedId: SelectedId = 1;
// const [selected, setSelected] = useState<SelectedId>(1);

// // state with array using type assertion
// type Names = string[];
// const namesVar: Names = ["joao", "ana"];
// const [names, setNames] = useState([] as Names);

// // state with no initial value, must provide type
// type SocketConnection = WebSocket;
// const socketVar: SocketConnection | undefined = undefined;
// const [socket, setSocket] = useState<SocketConnection>();

// // child
// import React from 'react';

// type Props = {
//     title: string
//     onClick: () => void;
// }

// const Child: React.FC<Props> = ({ title, onClick }) => {

//     return (
//         <div>
//             <div onClick={onClick}>
//                 {title}
//             </div>
//         </div>
//     )
// }
// export default Child

// catch (err: any) {
//     console.error('Wallet connection error:', err);

//     switch (err.code) {
//         case 4001:
//             setAlertMessage('Connection rejected by user.');
//             break;
//         case -32002:
//             setAlertMessage('MetaMask request already open. Check the extension popup.');
//             break;
//         case -32603:
//             setAlertMessage('Internal MetaMask error. Try again later.');
//             break;
//         default:
//             setAlertMessage('Unexpected connection error. Please try again.');
//     }

//     return null;
// }














