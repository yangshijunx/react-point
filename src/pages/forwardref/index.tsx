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

const NewFather = React.forwardRef((props, ref) => (
  <Father grandRef={ref as React.RefObject<HTMLHeadingElement>} {...props} />
));

const ForwardRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log("inputRef", inputRef.current);
  });
  return (
    <>
      <h1>ForwardRef</h1>
      <NewFather ref={inputRef} />
    </>
  );
};

export default ForwardRef;
