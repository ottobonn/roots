import React from "react";
import PageFrame from "../components/PageFrame";
import MemoryDetailView from "../components/MemoryDetailView";

export default class MemoryDetailScreen extends React.Component {
  render() {
    return (
      <PageFrame overlay={true}>
        <MemoryDetailView memory={this.props.route.params.memory} />
      </PageFrame>
    );
  }
};
