import { Badge, Box, Button, Container, Flex, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import PrintComponent from '../../comps/PrintComponent';

let base64 = require('base-64');
export const getStaticProps = async () => {
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + base64.encode(process.env.S_KEY + ':' + process.env.S_SEC))
    const res = await fetch(process.env.SO_URL, {method: 'GET', headers : headers});
    const data = await res.json(); 
    return {
        props: { listorder: data}
    }
}


const Loyaltee = ({ listorder }) => {
    return ( 
          <div> 
            {listorder.orders.map(o => (
                <SimpleGrid my={'5%'} columns={1} spacing={10} key={o.orderId}>  
                            <div>
                                <Badge fontSize={'lg'} colorScheme={'green'}>Order Number: {o.orderNumber}</Badge>                   
                                <hr />
                            </div>
                           
                            <SimpleGrid columns={3} spacing={10}>
                               {o.items.map(l => (
                            <Container key={l.orderItemId} boxShadow={'md'} padding={4}>
                             
                                {l.imageUrl.length > 0 && (
                                    <Image width={400} height={400} src={l.imageUrl} alt={l.name} />
                                )}
                                  <Flex direction={'column'}>
                                    <h2>SKU : {l.sku}</h2>
                                    <h3>{l.name}</h3> 
                                </Flex>  
                                {l.options.map((i) => (
                                    <Flex direction={'column'} key={i.name}>
                                        {i.name === 'Front Art File' && (
                                            <Link href={i.value} passHref>
                                               <a target="_blank">
                                                   <Button>
                                                    Front Art File
                                                   </Button> 
                                                </a> 
                                            </Link>
                                        )}
                                        {i.name === 'Art File' && (
                                            <Link href={i.value} passHref>
                                               <a target="_blank">
                                                   <Button>
                                                    Front Art File
                                                   </Button> 
                                                </a> 
                                            </Link>
                                        )}
                                       <h2>{i.name === 'Back Thumbnail' && (
                                           <Image width={400} height={400} src={i.value} alt='Garment' />
                                       )}</h2>  
                                    </Flex>
                                    
                                ))}
                             
                            </Container>
                        ))} 

                            </SimpleGrid>
                      
                     
                </SimpleGrid> 
            ))}
        </div>
     );
}
 
export default Loyaltee;