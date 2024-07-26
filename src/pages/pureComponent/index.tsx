import React from "react";

interface People {
  name: string;
  age: number;
}

interface State {
  people: People;
}

class PureComponentTest extends React.PureComponent<object, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      people: {
        name: "张三",
        age: 18,
      },
    };
  }

  add = () => {
    const { people } = this.state;
    people.age += 1;
    // purecomponent 会浅比较
    // this.setState({ people });
    // 这样浅拷贝就可以解决
    this.setState({ people: { ...people } });
  };

  render() {
    console.log("PureComponentTest render");
    const { people } = this.state;
    return (
      <>
        <h1>PureComponent</h1>
        <h1>{people.age}</h1>
        {/* 直接点击不会有变化 因为PureComponent会比较两次data对象，
            都指向同一个data,没有发生改变，所以不更新视图。 
         */}
        <button onClick={this.add}>点击年龄加一</button>
      </>
    );
  }
}

export default PureComponentTest;
