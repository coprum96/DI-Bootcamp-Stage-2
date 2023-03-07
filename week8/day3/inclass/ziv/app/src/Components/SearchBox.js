const SearchBox = (props) => {
    return(
        <div>
          <input onChange={(e) => props.findValue(e)}></input>
        </div>
    )
}

export default SearchBox