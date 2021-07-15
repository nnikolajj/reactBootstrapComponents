import SearchField from 'react-search-field';

export default function SearchFieldComponent(){

    function onChange(){

    }

    return(
<div>
    <SearchField
        placeholder='Search item'
        onChange={onChange}
    />

</div>)
}