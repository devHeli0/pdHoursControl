import React from 'react'

interface ListItem<T> {
  id: number
}

interface ListProps<T extends ListItem<T>> {
  title: string
  items: T[]
  loading: boolean
  error?: { status: number; message?: string }
  renderItemButton: (item: T) => React.ReactNode // Updated type to T
}

const ListComponent: React.FC<ListProps<any>> = ({
  title,
  items,
  loading,
  error,
  renderItemButton,
}) => {
  if (loading) return <p>Loading {title.toLowerCase()}...</p>

  if (error) {
    if ('status' in error) {
      const errMsg = 'error' in error ? error.message : JSON.stringify(error)

      return (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      )
    } else {
      return <div>{error.message}</div>
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <table className="border-collapse border border-gray-300 rounded-lg mb-8 w-full">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">Button</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="px-4 py-2">{item.id}</td>
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{renderItemButton(item)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListComponent
