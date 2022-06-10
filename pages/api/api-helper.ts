export async function submitContactForm(contactInput: any) {
  const result = await fetch(
    'https://graphql-api-betiu66zba-uc.a.run.app/graphql',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          mutation addContact($contactInput: ContactInput){
            addContact(contactInput: $contactInput){
                name
                email
                notes
            }
          }
          `,
        variables: {
          contactInput,
        },
      }),
    }
  )

  const data = await result.json()
  return data?.data?.addContact
}
