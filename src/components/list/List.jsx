import ListItem1 from '../listItem1/ListItem1'
import './list.css'

const List = () => {
  // const { myData, setMyData } = useState(ProjectData);
  return (
    <div className='list'>
      <h1 className='projects'>Movies</h1>
      <div className="cards">

<ListItem1/>
<ListItem1/>
<ListItem1/>
<ListItem1/>
<ListItem1/>
<ListItem1/>
<ListItem1/>
<ListItem1/>
        {/* {ProjectData.map((val) => {
          return <ListItem key={val.id} imgSrc={val.imgSrc} title={val.title} />
        })
        } */}

      </div>
    </div>
  )
}

export default List