import PrintComponent from '../../comps/PrintComponent';

let base64 = require('base-64');
export const getStaticProps = async () => {
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + base64.encode(process.env.S_KEY + ':' + process.env.S_SEC))
    const res = await fetch(process.env.S_URL, {method: 'GET', headers : headers});
    console.log(res);
    const data = await res.json();
    console.log(data);
    return {
        props: { store: data}
    }
}


const ArtWork = ({ store }) => {
    return ( 
        <div> 
            {store.map(s => (
                <div key={s.storeId}>
                    <div>
                        {s.storeId}
                        {s.storeName}
                    </div>
                    
                </div>
            ))}
        </div>
     );
}
 
export default ArtWork;