import { Arrow, Button, Flex } from '@/once-ui/components'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <Flex
        alignItems='center' justifyContent='center'>
        <Flex 
            direction='column' gap="16"
            justifyContent='center' alignItems='center'>
            <h1>404 - Not Found</h1>
            <Button
                id={`go-home-404`}
                href="/"
                size="s" variant="tertiary">
                <Flex alignItems="center">
                    Return Home
                    <Arrow trigger={`#go-home-404`}/>
                </Flex>
            </Button>            
        </Flex>
    </Flex>
  )
}