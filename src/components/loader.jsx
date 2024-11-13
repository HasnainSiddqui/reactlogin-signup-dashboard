// andtesign
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';


let LoaderSpiner = () =>{
    return(  <>
<div className="flex justify-center my-12"> <span className="text-3xl  mt-10"><Flex align="center" gap="middle">
   
   <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
 </Flex></span></div>
 </>
    )
}

export default LoaderSpiner