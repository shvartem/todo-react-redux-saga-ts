// import { Button, FormItemProps } from 'antd';
// import React, { useState } from 'react';
// import { TodoBody, TodoData } from '../MainPage.js/components/types';
// import CollectionCreateForm from './CollectionCreateForm';

// const defaultFormItems = [
//   {
//     name: 'username',
//     label: 'Your Name',
//     initialValue: '',
//     rules: [
//       {
//         required: true,
//         message: 'Please input smth',
//       },
//     ],
//   },
//   {
//     name: 'password',
//     label: 'Password',
//     initialValue: '',
//     rules: [
//       {
//         required: true,
//         message: 'Please input smth',
//       },
//     ],
//   },
// ];

// const defaultSubmitHandler = () => {
//   console.log('Plase add submit handler in props');
// };

// interface IModalForm {
//   title: string;
//   formItems: FormItemProps[];
//   submitHandler: (values: TodoData) => void
// }

// const ModalForm: React.FC<IModalForm> = ({
//   title = 'Login',
//   submitHandler = defaultSubmitHandler,
//   formItems = defaultFormItems,
// }) => {
//   const [visible, setVisible] = useState(false);

//   const onCreate = (values: TodoBody) => {
//     setVisible(false);
//     submitHandler(values);
//   };

//   return (
//     <div>
//       <Button
//         type="primary"
//         onClick={() => {
//           setVisible(true);
//         }}
//       >
//         {title}
//       </Button>
//       <CollectionCreateForm
//         title={title}
//         formItems={formItems}
//         visible={visible}
//         onCreate={onCreate}
//         onCancel={() => {
//           setVisible(false);
//         }}
//       />
//     </div>
//   );
// };

// export default ModalForm;

export {};
