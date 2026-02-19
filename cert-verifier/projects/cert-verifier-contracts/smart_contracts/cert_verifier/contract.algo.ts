import { Contract } from '@algorandfoundation/algorand-typescript'

export class CertVerifier extends Contract {
  hello(name: string): string {
    return `Hello, ${name}`
  }
}
