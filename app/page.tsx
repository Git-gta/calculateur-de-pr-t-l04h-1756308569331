import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ArrowRight, Star, Users, Zap } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-rLrcvDcvisW6Io0FOgsRuTl6/user-HUvCoz1lRT8paqE04sR0GEIe/img-J2QNSOYTkCuQUpoHghqZ6pIT.png?st=2025-08-27T14%3A28%3A00Z&se=2025-08-27T16%3A28%3A00Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=b2c0e1c0-cf97-4e19-8986-8073905d5723&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-27T10%3A21%3A36Z&ske=2025-08-28T10%3A21%3A36Z&sks=b&skv=2024-08-04&sig=tSGeMGcHKtN/3J40Y3%2BnHTVbpAphA5c5IlXwnXFVlwU%3D" alt="Calculateur de Prêt_l04h" width={40} height={40} className="rounded-lg" />
            <h1 className="text-2xl font-bold text-gray-900">Calculateur de Prêt_l04h</h1>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Génération de Calculateur de Prêt: Calculez vos mensualités de prêt immobilier ou auto avec taux, durée et montant
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The ultimate outils financiers solution for modern businesses, designed for particuliers, acheteurs immobiliers, emprunteurs.
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">10k+</div>
              <div className="text-gray-600">Active Users</div>
            </Card>
            <Card className="p-6 text-center">
              <Star className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">4.9/5</div>
              <div className="text-gray-600">User Rating</div>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </Card>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          
          <Card className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Calcul des mensualités de prêt</h3>
            <p className="text-gray-600">
              Powerful calcul des mensualités de prêt functionality designed for modern businesses.
            </p>
          </Card>
          <Card className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Comparaison de différents scénarios de prêt</h3>
            <p className="text-gray-600">
              Powerful comparaison de différents scénarios de prêt functionality designed for modern businesses.
            </p>
          </Card>
          <Card className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Simulation de remboursement</h3>
            <p className="text-gray-600">
              Powerful simulation de remboursement functionality designed for modern businesses.
            </p>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          <p>&copy; 2024 Calculateur de Prêt_l04h. Generated by Go To Factory.</p>
        </div>
      </footer>
    </div>
  )
}