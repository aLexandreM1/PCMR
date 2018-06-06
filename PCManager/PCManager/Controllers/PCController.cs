using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using PCManager.Models;

namespace PCManager.Controllers
{
    public class PCController : ApiController
    {
        private PCManagerDBEntities1 db = new PCManagerDBEntities1();

        // GET: api/PC
        public IQueryable<PCS> GetPCS()
        {
            return db.PCS;
        }

        // GET: api/PC/5
        [ResponseType(typeof(PCS))]
        public IHttpActionResult GetPCS(int id)
        {
            PCS pCS = db.PCS.Find(id);
            if (pCS == null)
            {
                return NotFound();
            }

            return Ok(pCS);
        }

        // PUT: api/PC/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPCS(int id, PCS pCS)
        {
            if (id != pCS.PcID)
            {
                return BadRequest();
            }

            db.Entry(pCS).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PCSExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/PC
        [ResponseType(typeof(PCS))]
        public IHttpActionResult PostPCS(PCS pCS)
        {
            db.PCS.Add(pCS);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = pCS.PcID }, pCS);
        }

        // DELETE: api/PC/5
        [ResponseType(typeof(PCS))]
        public IHttpActionResult DeletePCS(int id)
        {
            PCS pCS = db.PCS.Find(id);
            if (pCS == null)
            {
                return NotFound();
            }

            db.PCS.Remove(pCS);
            db.SaveChanges();

            return Ok(pCS);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PCSExists(int id)
        {
            return db.PCS.Count(e => e.PcID == id) > 0;
        }
    }
}