import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'

export default function page() {
  return (
    <div>Lets Goo Tooo Another Page Lets Goooooooooo!!!!!!!!!!
      <Card className='w-96'>
        <img src="https://i.ibb.co.com/ysM2v1G/Rectangle-31-2.png" alt="image" />
  <CardHeader>
  <CardDescription>Card Description</CardDescription>
    <CardTitle className='justify-end flex'>Card Title</CardTitle>
   
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <Button variant={'tryButton'}>Card Footer</Button>
  </CardFooter>
</Card>

    </div>
  )
}
