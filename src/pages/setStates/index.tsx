import { Button } from "antd";
import { Component, ReactNode, useEffect, useReducer, useState } from "react";
import { flushSync } from "react-dom";

const SetState = () => {
  // StrictMode 的设计初衷是为了提高开发过程中的开发者体验和代码质量，
  // 通过额外的调用来帮助开发者尽早发现和修复潜在问题。
  console.log("render");
  const [count, setCount] = useState(1);
  const [person, setPerson] = useState({ name: "zhangsan" });
  useEffect(() => {
    // 实际上相当于 在更新阶段 这里并不会再次执行
    // setInterval(() => {
    //   console.log("count 每秒加1", count);
    // }, 1000);
  }, []);
  const countStateReducer = (
    state: { count: number },
    action: { type: string }
  ) => {
    switch (action.type) {
      case "double":
        return { ...state, count: state.count * 2 };
      default:
        throw new Error();
    }
  };
  const [countState, dispatchCountState] = useReducer(countStateReducer, {
    count: count,
  });

  const addCount = () => {
    console.log("addCountbefore", count);
    flushSync(() => {
      setCount(count + 1);
    });
    setCount(count + 1);
    console.log("addCountafter", count);
  };

  const editPerson = () => {
    // 这样写默认react会认为前后没有变化 因为 person指向一个相同的地址
    person.name = "lisi";
    // setPerson(person);

    // 这样写react会认为前后有变化 因为person指向一个新的地址
    setPerson({ ...person });
  };

  const testSetTimeout = () => {
    console.log("testSetTimeout");
    setTimeout(() => {
      // react 18 与 之前的版本不一致
      console.log("setTimeout before", count);
      setCount(count + 1);
      console.log("setTimeout after", count);
    }, 0);
  };

  class TestSetState extends Component {
    state: Readonly<{ count: number }> = {
      count: 1,
    };
    render(): ReactNode {
      return (
        <div>
          <p>这是类组件的: {this.state.count}</p>
          <Button
            type="primary"
            onClick={() => {
              console.log("点击修改类组件state", count);
              this.setState({ count: 3 }, () => {
                console.log("点击修改类组件state回调", this.state.count);
              });
              flushSync(() => {
                console.log("点击修改类组件stateflushSync", count);
                this.setState(
                  {
                    count: 2,
                  },
                  () => {
                    console.log(
                      "点击修改类组件stateflushSyn回调",
                      this.state.count
                    );
                  }
                );
              });
            }}
          >
            修改类组件state
          </Button>
        </div>
      );
    }
  }

  return (
    <>
      <p>name: {person.name}</p>
      <p>{count}</p>
      <span>reducer:{countState.count}</span>

      <Button type="primary" onClick={editPerson}>
        修改姓名
      </Button>
      <Button type="primary" onClick={addCount}>
        +1
      </Button>
      <Button
        type="primary"
        onClick={() => {
          dispatchCountState({ type: "double" });
        }}
      >
        double
      </Button>
      <Button
        type="primary"
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);
          // 最后一个 在数据层，将多个状态更新合并成一次处理（在视图层，将多次渲染合并成一次渲染）
          setCount(count + 1);
        }}
      >
        批量处理+3
      </Button>

      <Button
        type="primary"
        onClick={() => {
          console.log("count", count);
          setCount((pre) => pre + 1);
          console.log("count+1", count);
          setCount((pre) => pre + 1);
          console.log("count+2", count);
          setCount((pre) => pre + 1);
          console.log("count+3", count);
        }}
      >
        不要批量处理+3
      </Button>

      <Button
        type="primary"
        onClick={() => {
          console.log("count", count);
          console.log("打印flushSync前count", count);
          flushSync(() => {
            setCount(count + 3);
            console.log("打印flushSync后的coun, 我想看执行顺序", count);
          });
          flushSync(() => {
            setCount(count + 1);
          });
          // flushSync(() => {
          //   setCount(count + 2);
          //   setCount(count + 1);
          //   // 只保留这个
          //   setCount(count + 1);
          // });
        }}
      >
        flushSync不要批量处理+3
      </Button>
      {/* 测试settimeout是同步还是异步 */}
      <Button type="primary" onClick={testSetTimeout}>
        setTimeout是同步还是异步
      </Button>
      <TestSetState />
    </>
  );
};

export default SetState;
