'use client';

import { ChatbotConfig, Message, OpenAssistantGPTChat } from 'openassistantgpt';
import { useEffect, useState } from 'react';
import { Button } from './components/ui/button';

export default function ChatPage() {
  const [count, setMessagesCount] = useState(0);
  const [defaultMessage, setDefaultMessage] = useState('');

  const chatbot: ChatbotConfig = {
    id: '12345',
    name: 'Asystent ProcureGenius',

    chatTitle: 'Asystent AI dla zamówień publicznych',
    welcomeMessage:
      "Witaj! 🚀 Jestem asystentem o nazwie ProcureGenius. Napisz, co chcesz zamówić lub sprawdzić w dokumentacji zakupów realizowanych od 2021 r. Zakończ swój opis poleceniem - np. jakie znam postępowania zakupowe w podobnej tematyce? albo na jakie pytania warto znać odpowiedź przygotowując się do takiego zamówienia? Możesz też poprosić o: analizę usług/produktów zamawianych razem, napisanie spisu treści, zaproponowanie treści wybranego rozdziału, zaproponowanie kar, zaproponowanie kryteriów etc. Najwięcej magii ukaże się z długiej dyskusji - zacznij od prostych pytań o fakty, by następnie prosić o wygenerowanie spisu treści i treści dla każdego z rozdziałów.",
    chatMessagePlaceHolder: 'Chcę zamówić ...',
    
    rightToLeftLanguage: false,

    bubbleColor: 'linear-gradient(to top left, #003366, #336699)',
    bubbleTextColor: '#FFFFFF',

    chatHeaderBackgroundColor: '#FFFFFF',
    chatHeaderTextColor: '#52525b',

    chatbotReplyBackgroundColor: '#e4e4e7',
    chatbotReplyTextColor: '#000000',

    userReplyBackgroundColor: '#e4e4e7',
    userReplyTextColor: '#000000',

    chatbotLogoURL:
      'https://gwetfkan2dovfoiz.public.blob.vercel-storage.com/search-8jZhOvOBPxuTmohrup5TPvSzrjsyog.png',
    chatInputStyle: 'default',

    chatHistoryEnabled: true,
    chatFileAttachementEnabled: true,
    //fontSize: '14px',
    displayFooterText: true,
    footerLink: 'https://www.openassistantgpt.io',
    footerTextName: 'OpenAssistantGPT',

    fontSize: '14px',

    messageSourceText: '',
    withChatMessageIcon: true,
  };

  useEffect(() => {
    console.log('Messages count:', count);
  }, [count]);

  function handleMessagesChange(messages: Message[]) {
    setMessagesCount(messages.length);
  }

  return (
    <OpenAssistantGPTChat
      chatbot={chatbot}
      path="/api/chat/assistant"
      defaultMessage={defaultMessage}
      withExitX={true}
      onMessagesChange={handleMessagesChange}
      extensions={[
        count == 0 && (
          <Button
            key="1"
            className="w-full bg-white"
            variant="outline"
            onClick={() =>
              setDefaultMessage('Chcę zamówić usługę leasingu samochodów służbowych. Na jakie pytania warto znać odpowiedź przygotowując się do takiego zamówienia?')
            }
          >
            Chcę zamówić usługę leasingu samochodów służbowych. Na jakie...
          </Button>
        ),
        count == 0 && (
          <Button
            key="2"
            className="w-full bg-white"
            variant="outline"
            onClick={() => setDefaultMessage('Chcę zamówić usługę infolinii / helpdesku. Jakie znasz postępowania zakupowe w podobnej tematyce? Podaj nazwę zamawiającego, tytuł postępowania, datę oraz numer BZP.')}
          >
            Chcę zamówić usługę infolinii / helpdesku. Jakie znasz...
          </Button>
        ),
        count == 0 && (
          <Button
            key="3"
            className="w-full bg-white"
            variant="outline"
            onClick={() => setDefaultMessage('chcę zamówić usługę zapewnienia czystości / sprzątania przestrzeni biurowych. Jakie kary umowne warto zastosować przy takim zamówieniu?')}
          >
            chcę zamówić usługę sprzątania przestrzeni biurowych. Jakie kary...
          </Button>
        )
      ]}
    />
  );
}
