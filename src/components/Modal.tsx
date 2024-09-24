import { Modal, Button, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState, useEffect } from 'react';
import { BiLock } from 'react-icons/bi';
import { WiStars } from 'react-icons/wi';


interface ModalBoxProps {
  open: boolean;
  onClose: () => void;
}

const ModalBox: React.FC<ModalBoxProps> = ({ open, onClose }) => {

  const [loading, setLoading] = useState<boolean>(false);
  const [text, setText] = useState<string>(''); // State to store user input text
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]); // Available voices
  const [selectedVoice, setSelectedVoice] = useState<string>(''); // State for selected voice
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false); // State for selected voice

  useEffect(() => {
    const synth = window.speechSynthesis;

    const loadVoices = () => {
      const availableVoices = synth.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0) {
        setSelectedVoice(availableVoices[0].name); 
      }
    };

    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = loadVoices;
    }
    loadVoices();
  }, []);

  // Text-to-Speech Function
  const handleTextToSpeech = () => {
    const synth = window.speechSynthesis;

    if (synth.speaking) {
      console.error('SpeechSynthesis is already speaking.');
      return;
    }

    if (text !== '') {
      const utterThis = new SpeechSynthesisUtterance(text);

      // Find the selected voice
      const voice = voices.find((v) => v.name === selectedVoice);
      if (voice) {
        utterThis.voice = voice; // Set the selected voice
        setIsSpeaking(true)
        setLoading(false)
        
      } 

      // Optional: Set up event listeners for speech synthesis
      utterThis.onend = () => {
        setIsSpeaking(false)
      };

      utterThis.onerror = (event) => {
        console.error('SpeechSynthesisUtterance.onerror', event);
      };

      synth.speak(utterThis);
    }
  };

  // Handle change in the selected voice
  const handleVoiceChange = (value: string) => {
    setSelectedVoice(value);
  };
   const clearText = () => {
    setText("")
   }



   
  return (
    <Modal 

   className='text-white'
  
      open={open} // Controls modal visibility
      onCancel={onClose} // Call onClose when the modal is dismissed
    
      footer={[
      ]}
    >
      <div className='flex flex-col gap-1 mb-1'>
      <Select className='h-10 '
        style={{ width: '100%'}}
        value={selectedVoice}
        onChange={handleVoiceChange}
        placeholder="Select voice"

       
      >
        {voices.map((voice) => (
          <Select.Option key={voice.name} value={voice.name}>
            {voice.name} (${voice.lang})
          </Select.Option>
        ))}
      </Select>

      <Select className='h-10'
      defaultValue="Language"
      style={{ width: '100%' }}
      options={[{ value: 'English', label: 'English' }]}
     >
     </Select>

    
     </div>

      <TextArea className='rounded-xl  border-gray-600 bg-[#07072C] mb-6 text-white placeholder-gray-500 px-3 py-2'
      value={text}
      rows={7}
      maxLength={500}
      onChange={(e) => setText(e.target.value)}
      placeholder="Type something to generate voice"
      style={{ height: 120, resize: 'none' }}
    />
    
    <div className='flex gap-2 w-full justify-between'>
      <Button type='text' key="back" className=' text-gray-300  text-xs font-semibold border-gray-600'>
        Advanced setting <BiLock/>
      </Button>
      <div className='flex gap-2'>
      <Button type='primary' key="back" onClick={clearText} className='hidden sm:flex bg-white text-xs text-black font-semibold'>
          Clear
        </Button>
        <Button type='primary' key="submit"  loading={loading} onClick={handleTextToSpeech} className=' border-gray-600 text-black text-xs bg-white font-semibold hover:bg-white '>
          {isSpeaking? "Speaking..." : "Generate voice"} <WiStars className='size-6' />
        </Button>
      </div>
       
        </div>
     
    </Modal>
  );
};

export default ModalBox;