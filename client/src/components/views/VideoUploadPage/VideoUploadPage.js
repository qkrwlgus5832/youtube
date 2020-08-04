import React from 'react'
import {Typography, Button, Form, message, Input, Icon} from 'antd';
import Dropzone from 'react-dropzone'

const {TextArea} = Input;
const {Title} = Typography;

function VideoUploadPage() { // functional 컴포넌트를 만든 후에
    return (
        <div style={{maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{textAlign:'center', marginButton:'2rem'}}>
                <Title level={2}> Upload Video </Title>
            </div> 

            <Form onSubmit>
                <div style={{display:'flex', justifyContent:'space-between'}}>

                    <Dropzone onDrop muiltiple>
                        
                    </Dropzone>
                    <div>
                       
                    </div>

                </div>
                <br/>
                <br/>
                <label> Title </label>
                <Input onChange value />

                <br/>
                <br/>

                <label> Description </label>
                <TextArea onChange value/>

                <br/>
                <br/>

                <select onChange> 
                    <option key value>

                    </option>
                </select>

                <br/>
                <br/>

                <select onChange> 
                    <option key value>

                    </option>
                </select>

                <br/>
                <br/>


                <Button type="primary" size="large" onClick>
                    Submit

                </Button>
            </Form>
        </div>

    )
}


export default VideoUploadPage // 이 컴포넌트를 다른 파일에서 읽을 수 있게 export