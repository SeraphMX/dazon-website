'use client'

import { CheckCircle2, Circle } from 'lucide-react'

interface StepsProps {
  currentStep: number
  mode?: 'store' | 'catalog'
}

const getSteps = (mode: 'store' | 'catalog') => {
  if (mode === 'catalog') {
    return [
      { number: 1, title: 'Contacto' },
      { number: 2, title: 'Envío' },
      { number: 3, title: 'Confirmación' },
    ]
  }
  return [
    { number: 1, title: 'Contacto' },
    { number: 2, title: 'Envío' },
    { number: 3, title: 'Pago' },
    { number: 4, title: 'Confirmación' },
  ]
}

export function Steps({ currentStep, mode = 'store' }: StepsProps) {
  const steps = getSteps(mode)

  return (
    <div className="flex items-center justify-center">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className="flex flex-col items-center">
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center
              ${currentStep > step.number ? 'bg-primary text-white' : 
                currentStep === step.number ? 'bg-primary/20 text-primary' : 
                'bg-gray-200 text-gray-500'}
            `}>
              {currentStep > step.number ? (
                <CheckCircle2 size={20} />
              ) : (
                <Circle size={20} />
              )}
            </div>
            <span className="text-sm mt-1">{step.title}</span>
          </div>
          {index < steps.length - 1 && (
            <div className={`
              w-24 h-1 mx-2
              ${currentStep > step.number + 1 ? 'bg-primary' : 
                currentStep > step.number ? 'bg-primary/20' : 
                'bg-gray-200'}
            `} />
          )}
        </div>
      ))}
    </div>
  )
}