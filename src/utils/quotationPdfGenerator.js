import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

/**
 * Converts a number into Indian Rupee words (Lakhs, Crores, Thousands)
 */
export function numberToIndianWords(num) {
  if (!num || isNaN(num)) return 'Zero Rupees Only'
  const a = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
  const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']

  const inWords = (n) => {
    let str = ''
    if (n > 99) {
      str += a[Math.floor(n / 100)] + ' Hundred '
      n %= 100
    }
    if (n > 19) {
      str += b[Math.floor(n / 10)] + ' '
      n %= 10
    }
    if (n > 0) {
      str += a[n] + ' '
    }
    return str.trim()
  }

  const rounded = Math.round(num)
  if (rounded === 0) return 'Zero Rupees Only'

  const crore = Math.floor(rounded / 10000000)
  const lakh = Math.floor((rounded % 10000000) / 100000)
  const thousand = Math.floor((rounded % 100000) / 1000)
  const remainder = rounded % 1000

  let result = ''
  if (crore > 0) result += inWords(crore) + ' Crore '
  if (lakh > 0) result += inWords(lakh) + ' Lakh '
  if (thousand > 0) result += inWords(thousand) + ' Thousand '
  if (remainder > 0) result += inWords(remainder) + ' '

  return 'Rupees ' + result.trim() + ' Only'
}

/**
 * Formats a number to Indian Rupee currency format (e.g., ₹3,85,500)
 */
export function formatINRCurrency(val) {
  if (val === undefined || val === null || isNaN(val)) return '₹0'
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(val)
}

/**
 * Generates and triggers the download of a high-fidelity official Atronics Quotation PDF.
 * @param {Object} quote - The quotation data object
 */
export async function generateQuotationPDF(quote) {
  if (!quote) return

  const quoteId = quote.id || `QT-${Date.now().toString().slice(-6)}`
  const clientName = quote.clientName || 'Valued Client'
  const clientEmail = quote.clientEmail || 'client@domain.com'
  const projectName = quote.projectName || 'Custom PCB Assembly Project'
  const serviceType = quote.serviceType || 'Turnkey PCB Assembly'
  const layerCount = quote.layerCount || '4 Layers'
  const quantity = quote.quantity || 100
  const dimensions = quote.dimensions || '100mm x 100mm'
  const leadTime = quote.leadTime || '7 Business Days'
  const createdDate = quote.createdDate || new Date().toISOString().split('T')[0]
  const validUntil = quote.validUntil || new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0]
  const status = quote.status || 'Active Quotation'
  const adminNotes = quote.adminNotes || 'Includes standard DFM verification, 100% AOI optical testing & RoHS compliance certification.'

  const specs = quote.specs || {}
  const material = specs.material || 'FR4 TG170 High-Tg Substrate'
  const thickness = specs.thickness || '1.6mm (Standard)'
  const copperWeight = specs.copperWeight || '1.0 oz Outer / 1.0 oz Inner'
  const surfaceFinish = specs.surfaceFinish || 'ENIG (Electroless Nickel Immersion Gold)'
  const solderMask = specs.solderMask || 'Matte Black'
  const silkscreen = specs.silkscreen || 'Crisp White'
  const impedance = specs.impedance || 'Controlled 50Ω Single / 90Ω Differential'
  const viaProcess = specs.viaProcess || 'Tented & Plugged Vias (Standard)'
  const minDrill = specs.minDrill || '0.20mm (8 mil)'
  const minSpacing = specs.minSpacing || '4/4 mil (0.1mm)'
  const qualityClass = specs.qualityClass || 'IPC-A-600 / IPC-A-610 Class 3'
  const assemblySide = specs.assemblySide || 'Double-Sided SMT + THT'
  const sourcingMode = specs.sourcingMode || 'Full Turnkey (100% Authorized Sourcing)'
  const testingInspection = specs.testingInspection || '100% 3D AOI + Flying Probe + X-Ray'

  const pricing = quote.pricing || {}
  const fabCost = Number(pricing.fabrication || 0)
  const smtCost = Number(pricing.smtAssembly || 0)
  const bomCost = Number(pricing.bomComponents || 0)
  const toolingCost = Number(pricing.toolingNRE || 0)
  const testCost = Number(pricing.testing || 0)
  const shippingCost = Number(pricing.shipping || 0)
  const discount = Number(pricing.discount || 0)

  const subtotal = fabCost + smtCost + bomCost + toolingCost + testCost + shippingCost
  const netTaxable = Math.max(0, subtotal - discount)
  const grandTotal = pricing.total !== undefined ? Number(pricing.total) : netTaxable

  // Construct printable HTML container
  const container = document.createElement('div')
  container.id = 'atronics-pdf-render-container'
  container.style.position = 'fixed'
  container.style.top = '-99999px'
  container.style.left = '-99999px'
  container.style.width = '840px'
  container.style.background = '#FFFFFF'
  container.style.color = '#0F172A'
  container.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
  container.style.padding = '36px 40px'
  container.style.boxSizing = 'border-box'
  container.style.zIndex = '-1000'

  container.innerHTML = `
    <div style="width: 100%; max-width: 760px; margin: 0 auto; background: #FFFFFF; color: #0F172A; line-height: 1.4;">
      
      <!-- TOP HEADER BAR -->
      <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #087BFF; padding-bottom: 16px; margin-bottom: 20px;">
        <div style="display: flex; flex-direction: column;">
          <img src="/images/logo-light.png" alt="Atronics Logo" style="height: 48px; width: auto; max-width: 220px; object-fit: contain; margin-bottom: 6px;" onerror="this.src='/images/logo.png';" />
          <div style="font-size: 11px; font-weight: 700; color: #087BFF; letter-spacing: 1px; text-transform: uppercase;">
            Advanced Electronics Manufacturing & PCB Assembly
          </div>
        </div>

        <div style="text-align: right; font-size: 10px; color: #475569; line-height: 1.4;">
          <strong style="font-size: 12px; color: #0F172A;">ATRONICS TECHNOLOGIES PVT. LTD.</strong><br />
          Plot 42, Electronics City Phase 1, Bengaluru, KA - 560100, India<br />
          <strong>GSTIN:</strong> 29AABCU9603R1ZM | <strong>CIN:</strong> U72900KA2024PTC184920<br />
          <strong>Email:</strong> quotes@atronics.io | <strong>Web:</strong> www.atronics.io
        </div>
      </div>

      <!-- DOCUMENT TITLE & QUOTE BADGE -->
      <div style="display: flex; justify-content: space-between; align-items: center; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 12px 16px; margin-bottom: 18px;">
        <div>
          <span style="font-size: 9px; font-weight: 800; color: #087BFF; letter-spacing: 1px; text-transform: uppercase; background: #EFF6FF; padding: 3px 8px; border-radius: 4px; border: 1px solid #BFDBFE;">
            OFFICIAL ENGINEERING PRO-FORMA QUOTATION
          </span>
          <h1 style="font-size: 18px; font-weight: 800; color: #0F172A; margin: 4px 0 0 0;">
            ${projectName}
          </h1>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 16px; font-weight: 850; color: #087BFF; font-family: monospace;">${quoteId}</div>
          <div style="font-size: 10.5px; color: #64748B; font-weight: 600;">Status: <span style="color: #059669; font-weight: 700;">${status}</span></div>
        </div>
      </div>

      <!-- CLIENT & QUOTE METADATA GRID -->
      <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 16px; margin-bottom: 20px;">
        <!-- Left: Client Bill To -->
        <div style="border: 1px solid #E2E8F0; border-radius: 8px; padding: 12px 14px; background: #FFFFFF;">
          <div style="font-size: 10px; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; border-bottom: 1px dashed #E2E8F0; padding-bottom: 4px;">
            CLIENT / BILL TO DETAILS
          </div>
          <div style="font-size: 13px; font-weight: 800; color: #0F172A; margin-bottom: 2px;">${clientName}</div>
          <div style="font-size: 11px; color: #475569; margin-bottom: 2px;"><strong>Contact / Email:</strong> ${clientEmail}</div>
          <div style="font-size: 11px; color: #475569;"><strong>Service Scope:</strong> ${serviceType}</div>
        </div>

        <!-- Right: Commercial Dates & Lead Time -->
        <div style="border: 1px solid #E2E8F0; border-radius: 8px; padding: 12px 14px; background: #FFFFFF;">
          <div style="font-size: 10px; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; border-bottom: 1px dashed #E2E8F0; padding-bottom: 4px;">
            COMMERCIAL TIMELINE & LOGISTICS
          </div>
          <div style="font-size: 11px; color: #334155; margin-bottom: 3px; display: flex; justify-content: space-between;">
            <span>Quotation Date:</span> <strong style="color: #0F172A;">${createdDate}</strong>
          </div>
          <div style="font-size: 11px; color: #334155; margin-bottom: 3px; display: flex; justify-content: space-between;">
            <span>Validity Period:</span> <strong style="color: #0F172A;">${validUntil} (30 Days)</strong>
          </div>
          <div style="font-size: 11px; color: #334155; display: flex; justify-content: space-between;">
            <span>Committed Turnaround:</span> <strong style="color: #087BFF;">${leadTime}</strong>
          </div>
        </div>
      </div>

      <!-- TECHNICAL SPECIFICATIONS MATRIX -->
      <div style="margin-bottom: 20px;">
        <div style="font-size: 11px; font-weight: 800; color: #0F172A; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
          <span style="display: inline-block; width: 4px; height: 12px; background: #087BFF; border-radius: 2px;"></span>
          PCB TECHNICAL SPECIFICATION MATRIX
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 10.5px; border: 1px solid #CBD5E1; border-radius: 6px; overflow: hidden;">
          <tbody>
            <tr style="background: #F8FAFC;">
              <td style="padding: 6px 10px; border-bottom: 1px solid #E2E8F0; border-right: 1px solid #E2E8F0; color: #64748B; font-weight: 700; width: 20%;">Order Quantity</td>
              <td style="padding: 6px 10px; border-bottom: 1px solid #E2E8F0; border-right: 1px solid #E2E8F0; color: #0F172A; font-weight: 700; width: 30%;">${quantity} Units / Pcs</td>
              <td style="padding: 6px 10px; border-bottom: 1px solid #E2E8F0; border-right: 1px solid #E2E8F0; color: #64748B; font-weight: 700; width: 20%;">Layer Count</td>
              <td style="padding: 6px 10px; border-bottom: 1px solid #E2E8F0; color: #0F172A; font-weight: 700; width: 30%;">${layerCount}</td>
            </tr>
            <tr>
              <td style="padding: 6px 10px; border-bottom: 1px solid #E2E8F0; border-right: 1px solid #E2E8F0; color: #64748B; font-weight: 700;">Board Dimensions</td>
              <td style="padding: 6px 10px; border-bottom: 1px solid #E2E8F0; border-right: 1px solid #E2E8F0; color: #0F172A;">${dimensions}</td>
              <td style="padding: 6px 10px; border-bottom: 1px solid #E2E8F0; border-right: 1px solid #E2E8F0; color: #64748B; font-weight: 700;">Base Substrate</td>
              <td style="padding: 6px 10px; border-bottom: 1px solid #E2E8F0; color: #0F172A;">${material}</td>
            </tr>
            <tr style="background: #F8FAFC;">
              <td style="padding: 6px 10px; border-bottom: 1px solid #E2E8F0; border-right: 1px solid #E2E8F0; color: #64748B; font-weight: 700;">Finished Thickness</td>
              <td style="padding: 6px 10px; border-bottom: 1px solid #E2E8F0; border-right: 1px solid #E2E8F0; color: #0F172A;">${thickness}</td>
              <td style="padding: 6px 10px; border-bottom: 1px solid #E2E8F0; border-right: 1px solid #E2E8F0; color: #64748B; font-weight: 700;">Copper Weight</td>
              <td style="padding: 6px 10px; border-bottom: 1px solid #E2E8F0; color: #0F172A;">${copperWeight}</td>
            </tr>
            <tr>
              <td style="padding: 6px 10px; border-bottom: 1px solid #E2E8F0; border-right: 1px solid #E2E8F0; color: #64748B; font-weight: 700;">Surface Finish</td>
              <td style="padding: 6px 10px; border-bottom: 1px solid #E2E8F0; border-right: 1px solid #E2E8F0; color: #0F172A;">${surfaceFinish}</td>
              <td style="padding: 6px 10px; border-bottom: 1px solid #E2E8F0; border-right: 1px solid #E2E8F0; color: #64748B; font-weight: 700;">Mask / Silkscreen</td>
              <td style="padding: 6px 10px; border-bottom: 1px solid #E2E8F0; color: #0F172A;">${solderMask} / ${silkscreen}</td>
            </tr>
            <tr style="background: #F8FAFC;">
              <td style="padding: 6px 10px; border-bottom: 1px solid #E2E8F0; border-right: 1px solid #E2E8F0; color: #64748B; font-weight: 700;">Impedance Control</td>
              <td style="padding: 6px 10px; border-bottom: 1px solid #E2E8F0; border-right: 1px solid #E2E8F0; color: #0F172A;">${impedance}</td>
              <td style="padding: 6px 10px; border-bottom: 1px solid #E2E8F0; border-right: 1px solid #E2E8F0; color: #64748B; font-weight: 700;">Via Technology</td>
              <td style="padding: 6px 10px; border-bottom: 1px solid #E2E8F0; color: #0F172A;">${viaProcess}</td>
            </tr>
            <tr>
              <td style="padding: 6px 10px; border-right: 1px solid #E2E8F0; color: #64748B; font-weight: 700;">Quality Standard</td>
              <td style="padding: 6px 10px; border-right: 1px solid #E2E8F0; color: #0F172A;">${qualityClass}</td>
              <td style="padding: 6px 10px; border-right: 1px solid #E2E8F0; color: #64748B; font-weight: 700;">Inspection & Test</td>
              <td style="padding: 6px 10px; color: #0F172A;">${testingInspection}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ITEMIZED COMMERCIAL PRICING SCHEDULE -->
      <div style="margin-bottom: 20px;">
        <div style="font-size: 11px; font-weight: 800; color: #0F172A; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
          <span style="display: inline-block; width: 4px; height: 12px; background: #087BFF; border-radius: 2px;"></span>
          COMMERCIAL PRICING BREAKDOWN (INR ₹)
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 11px; border: 1px solid #CBD5E1;">
          <thead>
            <tr style="background: #0F172A; color: #FFFFFF;">
              <th style="padding: 8px 12px; text-align: left; font-size: 10.5px; font-weight: 700; width: 8%;">ITEM</th>
              <th style="padding: 8px 12px; text-align: left; font-size: 10.5px; font-weight: 700; width: 52%;">DESCRIPTION OF SCOPE / ENGINEERING SERVICE</th>
              <th style="padding: 8px 12px; text-align: center; font-size: 10.5px; font-weight: 700; width: 15%;">QTY</th>
              <th style="padding: 8px 12px; text-align: right; font-size: 10.5px; font-weight: 700; width: 25%;">AMOUNT (INR ₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 8px 12px; border-bottom: 1px solid #E2E8F0; text-align: center; color: #64748B;">01</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A; font-weight: 600;">
                Bare Board PCB Fabrication (${layerCount}, ${dimensions}, ${material})
              </td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #E2E8F0; text-align: center; color: #475569;">${quantity} pcs</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #E2E8F0; text-align: right; font-weight: 700; color: #0F172A;">${formatINRCurrency(fabCost)}</td>
            </tr>

            ${smtCost > 0 ? `
            <tr style="background: #F8FAFC;">
              <td style="padding: 8px 12px; border-bottom: 1px solid #E2E8F0; text-align: center; color: #64748B;">02</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A; font-weight: 600;">
                High-Speed SMT Pick & Place + Reflow Soldering (${assemblySide})
              </td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #E2E8F0; text-align: center; color: #475569;">${quantity} boards</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #E2E8F0; text-align: right; font-weight: 700; color: #0F172A;">${formatINRCurrency(smtCost)}</td>
            </tr>
            ` : ''}

            ${bomCost > 0 ? `
            <tr>
              <td style="padding: 8px 12px; border-bottom: 1px solid #E2E8F0; text-align: center; color: #64748B;">03</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A; font-weight: 600;">
                BOM Electronic Component Sourcing (${sourcingMode})
              </td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #E2E8F0; text-align: center; color: #475569;">Full BOM</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #E2E8F0; text-align: right; font-weight: 700; color: #0F172A;">${formatINRCurrency(bomCost)}</td>
            </tr>
            ` : ''}

            ${toolingCost > 0 ? `
            <tr style="background: #F8FAFC;">
              <td style="padding: 8px 12px; border-bottom: 1px solid #E2E8F0; text-align: center; color: #64748B;">04</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A; font-weight: 600;">
                NRE Tooling, Photoplots & Laser Cut Framed Stainless Stencils
              </td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #E2E8F0; text-align: center; color: #475569;">1 Lot</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #E2E8F0; text-align: right; font-weight: 700; color: #0F172A;">${formatINRCurrency(toolingCost)}</td>
            </tr>
            ` : ''}

            ${shippingCost > 0 ? `
            <tr>
              <td style="padding: 8px 12px; border-bottom: 1px solid #E2E8F0; text-align: center; color: #64748B;">05</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A; font-weight: 600;">
                Vacuum ESD Packaging, Moisture Barrier Bags & Express Freight
              </td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #E2E8F0; text-align: center; color: #475569;">Doorstep</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #E2E8F0; text-align: right; font-weight: 700; color: #0F172A;">${formatINRCurrency(shippingCost)}</td>
            </tr>
            ` : ''}
          </tbody>
        </table>

        <!-- TOTALS SUMMARY BOX -->
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-top: 10px; gap: 20px;">
          <!-- Left: Amount in Words & Notes -->
          <div style="flex: 1; border: 1px solid #E2E8F0; border-radius: 6px; padding: 10px 12px; background: #F8FAFC;">
            <div style="font-size: 9.5px; font-weight: 800; color: #64748B; text-transform: uppercase; margin-bottom: 3px;">AMOUNT CHARGEABLE (IN WORDS):</div>
            <div style="font-size: 11px; font-weight: 750; color: #0F172A; margin-bottom: 8px; font-style: italic;">
              ${numberToIndianWords(grandTotal)}
            </div>
            <div style="font-size: 9.5px; font-weight: 800; color: #64748B; text-transform: uppercase; margin-bottom: 3px;">ENGINEERING NOTES:</div>
            <div style="font-size: 10.5px; color: #334155; line-height: 1.3;">${adminNotes}</div>
          </div>

          <!-- Right: Number Breakdown -->
          <div style="width: 260px; border: 1px solid #CBD5E1; border-radius: 6px; overflow: hidden; background: #FFFFFF;">
            <div style="display: flex; justify-content: space-between; padding: 5px 10px; border-bottom: 1px solid #F1F5F9; font-size: 11px; color: #475569;">
              <span>Subtotal:</span>
              <strong style="color: #0F172A;">${formatINRCurrency(subtotal)}</strong>
            </div>
            ${discount > 0 ? `
            <div style="display: flex; justify-content: space-between; padding: 5px 10px; border-bottom: 1px solid #F1F5F9; font-size: 11px; color: #16A34A;">
              <span>Commercial Waiver:</span>
              <strong>-${formatINRCurrency(discount)}</strong>
            </div>
            ` : ''}
            <div style="display: flex; justify-content: space-between; padding: 8px 10px; background: #087BFF; color: #FFFFFF; font-size: 13px; font-weight: 850;">
              <span>GRAND TOTAL:</span>
              <span style="font-size: 15px;">${formatINRCurrency(grandTotal)}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- BANK REMITTANCE & DIGITAL AUTHORIZATION FOOTER -->
      <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 16px; border-top: 1px solid #E2E8F0; padding-top: 14px;">
        <!-- Bank Details -->
        <div style="font-size: 10px; color: #475569; line-height: 1.4; background: #F8FAFC; padding: 10px; border-radius: 6px; border: 1px solid #E2E8F0;">
          <strong style="color: #0F172A; font-size: 10.5px;">BANK REMITTANCE DETAILS (RTGS / NEFT / IMPS):</strong><br />
          <strong>Beneficiary Name:</strong> ATRONICS TECHNOLOGIES PVT. LTD.<br />
          <strong>Bank:</strong> HDFC Bank Ltd | <strong>A/C No:</strong> 50200084920194 (Current)<br />
          <strong>IFSC Code:</strong> HDFC0001048 | <strong>Branch:</strong> Electronics City, Bangalore<br />
          <strong>UPI ID:</strong> atronics@hdfcbank
        </div>

        <!-- Authorized Signature & Seal -->
        <div style="text-align: right; display: flex; flex-direction: column; justify-content: space-between; align-items: flex-end;">
          <div style="font-size: 10px; color: #64748B;">For <strong>ATRONICS TECHNOLOGIES PVT. LTD.</strong></div>
          <div style="border: 1.5px dashed #087BFF; border-radius: 6px; padding: 6px 12px; background: #EFF6FF; text-align: center; margin: 4px 0;">
            <div style="font-size: 11px; font-weight: 800; color: #087BFF; letter-spacing: 0.5px;">DIGITALLY SIGNED & VERIFIED</div>
            <div style="font-size: 8.5px; color: #3B82F6; font-family: monospace;">AUTH ID: ATR-SIG-${quoteId}-${Date.now().toString().slice(-4)}</div>
          </div>
          <div style="font-size: 9.5px; color: #64748B;">Authorized Commercial & Engineering Signatory</div>
        </div>
      </div>

      <!-- FOOTER TERMS -->
      <div style="margin-top: 14px; text-align: center; font-size: 8.5px; color: #94A3B8; border-top: 1px solid #F1F5F9; padding-top: 6px;">
        This is a computer generated official pro-forma quotation. Standard IPC-A-600/610 Class 2 & 3 manufacturing guidelines apply. 
        Questions? Contact <strong>engineering@atronics.io</strong> or raise a ticket via your client portal.
      </div>
    </div>
  `

  document.body.appendChild(container)

  try {
    // Wait a brief moment for layout/fonts to settle
    await new Promise(r => setTimeout(r, 250))

    const canvas = await html2canvas(container, {
      scale: 2.2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#FFFFFF',
      logging: false,
      windowWidth: 840
    })

    const imgData = canvas.toDataURL('image/png', 1.0)
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    })

    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, Math.min(pdfHeight, pdf.internal.pageSize.getHeight()))
    
    // Save file
    const safeTitle = (projectName || 'Quotation').replace(/[^a-zA-Z0-9_-]/g, '_')
    pdf.save(`Atronics_Quotation_${quoteId}_${safeTitle}.pdf`)
    return true
  } catch (err) {
    console.error('Error generating quotation PDF:', err)
    window.print()
    return false
  } finally {
    if (document.body.contains(container)) {
      document.body.removeChild(container)
    }
  }
}
