import React, { useEffect, useRef } from "react";

interface Props {
  // TODO: add props here
  grandRef: React.RefObject<HTMLHeadingElement>;
}

const Son: React.FC<Props> = (props) => {
  const { grandRef } = props;
  console.log("Son render", grandRef);
  return (
    <div>
      <h1 ref={grandRef}>Son</h1>
    </div>
  );
};

class Father extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Son grandRef={this.props.grandRef} />
      </div>
    );
  }
}

const NewSon: React.FC<{ ref: object }> = (props) => {
  console.log("NewSon render", props);
  return (
    <div>
      <h1>new Son</h1>
    </div>
  );
};

/**
 * 在 React 中，如果没有使用 forwardRef，
 * 函数组件无法直接处理 ref 属性，因为 ref 是一个特殊的属性，
 * React 会用它来访问组件实例或 DOM 元素。默认情况下，
 * React 不会将 ref 作为普通的 props 传递给函数组件。
 */

/**
 * 当你在父组件中使用 ref 时，React 内部会处理 ref，
 * 并将其附加到组件实例或 DOM 元素上，而不是像其他 props 一样传递给子组件。
 * 对于函数组件，React 会忽略 ref，因为函数组件没有实例对象（没有 this），
 * 因此没有什么可以附加 ref 的地方。
 */

/**
 * forwardRef 是一个专门设计的工具，用于函数组件处理 ref。
 * 它使得函数组件能够显式地接收和传递 ref，
 * 让你可以将 ref 传递给函数组件内部的某个元素或另一个子组件。
 */

const NewFather = React.forwardRef((props, ref) => (
  <Father grandRef={ref as React.RefObject<HTMLHeadingElement>} {...props} />
));

const ForwardRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const newSonRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    console.log("inputRef", inputRef.current);
  });
  return (
    <>
      <h1>ForwardRef</h1>
      <NewFather ref={inputRef} />
      <h1>看看ref对不对</h1>
      {/* 
        强行给函数组件使用ref就会报错
        console.js:288 Warning: Function components cannot be given refs. 
        Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
      */}
      <NewSon ref={newSonRef} />
    </>
  );
};

export default ForwardRef;
