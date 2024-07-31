import React, { Suspense } from "react";
import Test from "./components/test";

const NewTest = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        default: Test,
      } as any);
    }, 2000);
  });
});

class LazyComponent extends React.Component<object> {
  constructor(props: object) {
    super(props);
    this.state = {
      data: [],
      page: 1,
      loading: false,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    return (
      <>
        <h1>Lazy Component</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <NewTest />
        </Suspense>
      </>
    );
  }
}

export default LazyComponent;
