export default class SearchContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events,
      results: []
    };
    this._handleResults = this._handleResults.bind(this);
  }

  _handleResults(results) {
    console.log(results);
    this.setState({ results });
  }

  render() {
    return (
      <View>
        <View style={{ marginTop: 110 }}>
          {
            this.state.results.map((result, i) => {
              return (
                <Text key={i}>
                  {typeof result === 'object' && !(result instanceof Array) ? result.title : result.name}
                </Text>
              );
            })
          }
          <TouchableOpacity onPress={() => this.searchBar.show()}>
            <View style={{ backgroundColor: 'green', height: 100, marginTop: 50 }}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.searchBar.hide()}>
            <View style={{ backgroundColor: 'red', height: 100 }}/>
          </TouchableOpacity>
        </View>
        <SearchBar
          ref={(ref) => this.searchBar = ref}
          data={events}
          handleResults={this._handleResults}
          showOnLoad
        />
      </View>
    );
  }
}